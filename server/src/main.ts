/* eslint-disable @typescript-eslint/no-var-requires */
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
const compression = require('compression');
import helmet from 'helmet';
const config = require('config');
const bodyParser = require('body-parser');
import * as cookieParser from 'cookie-parser';

import { AppModule } from './app.module';
import { createRedisClient } from './common/database/redis';

const host = config.get('server.host');
const port = config.get('server.port');
const apiPrefix = config.get('server.apiPrefix');
const swaggerOpen = config.get('swagger.open');
/**
 * app添加全局中间件
 * @param {NestExpressApplication} app express应用实例
 */
function addAppGlobalMiddleaware(app: NestExpressApplication) {
  app.use(helmet());
  app.use(bodyParser.json({ extended: true, limit: '20mb' }));
  app.use(compression());
  app.use(cookieParser());
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
  // 创建redis实例
  await createRedisClient();
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix(apiPrefix); // 设置服务器路由前缀(https://docs.nestjs.com/faq/global-prefix)
  addAppGlobalMiddleaware(app);
  swaggerOpen && addSwagger(app);
  await app.listen(port, host, () => {
    console.log(`     Application is listening on http://${host}:${port}`);
    if (swaggerOpen) {
      const path = config.get('swagger.path');
      console.log(`     open http://${host}:${port}/${path} swagger for Api`);
    }
  });
}
bootstrap();
