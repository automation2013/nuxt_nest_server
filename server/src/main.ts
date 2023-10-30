/* eslint-disable @typescript-eslint/no-var-requires */
import * as fs from 'node:fs';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import RedisStore from 'connect-redis';
import * as session from 'express-session';
import { redis as redisInstance } from './common/database/redis';
import { getCookieConfig } from './common/utils/cookie';

import { AppModule } from './app.module';
const path = require('node:path');
const compression = require('compression');
const config = require('config');
const bodyParser = require('body-parser');
const host = config.get('server.host');
const port = config.get('server.port');
const httpsOpen = config.get('server.httpsOpen');
const apiPrefix = config.get('server.apiPrefix');
const swaggerOpen = config.get('swagger.open');
const httpsOptions = httpsOpen
  ? {
      key: fs.readFileSync(
        path.join(__dirname, '../../../', './secrets/private-key.pem'),
      ),
      cert: fs.readFileSync(
        path.join(__dirname, '../../../', './secrets/public-certificate.pem'),
      ),
    }
  : undefined;

/**
 * app添加全局中间件
 * @param {NestExpressApplication} app express应用实例
 */
function addAppGlobalMiddleaware(app: NestExpressApplication) {
  app.use(helmet());
  app.use(bodyParser.json({ extended: true, limit: '20mb' }));
  app.use(compression());
  app.use(cookieParser());
  if (config.get('session.isOpen')) {
    app.use(
      session({
        name: config.get('session.sessionName'),
        secret: config.get('session.sessionSecret'),
        resave: true,
        saveUninitialized: false,
        store: new RedisStore({
          client: redisInstance,
          prefix: config.get('session.storePrefix'),
        }),
        cookie: getCookieConfig(config.get('session.sessionCookie')),
      }),
    );
  }
}

/**
 * app添加swagger接口文档
 * @param {NestExpressApplication} app express应用实例
 */
function addSwagger(app: NestExpressApplication) {
  const title = config.get('swagger.title');
  const description = config.get('swagger.description');
  const version = config.get('swagger.version');
  const tag = config.get('swagger.tag');
  const path = config.get('swagger.path');
  const options = new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .setVersion(version)
    .addTag(tag)
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(path, app, document);
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    httpsOptions,
  });
  app.set('trust proxy', 1);
  app.setGlobalPrefix(apiPrefix); // 设置服务器路由前缀(https://docs.nestjs.com/faq/global-prefix)
  addAppGlobalMiddleaware(app);
  swaggerOpen && addSwagger(app);
  await app.listen(port, host, () => {
    const protocol = httpsOpen ? 'https' : 'http';
    console.log(
      '\x1B[32m',
      ` ➜ Server:   ${protocol}://${host}:${port}`,
      '\x1B[0m',
    );
    if (swaggerOpen) {
      const path = config.get('swagger.path');
      console.log(
        '\x1B[35m',
        ` ➜ Swagger: ${protocol}://127.0.0.1:${port}/${path}`,
        '\x1B[0m',
      );
    }
  });
}
bootstrap();
