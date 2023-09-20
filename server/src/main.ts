/* eslint-disable @typescript-eslint/no-var-requires */
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
const compression = require('compression');
import helmet from 'helmet';
const config = require('config');
const bodyParser = require('body-parser');

import { AppModule } from './app.module';
import { createRedisClient } from './common/database/redis';

const port = config.get('server.port');
const apiPrefix = config.get('server.apiPrefix');

/**
 * app添加全局中间件
 * @param {NestExpressApplication} app express应用实例
 */
function addAppGlobalMiddleaware(app: NestExpressApplication) {
  app.use(helmet());
  app.use(bodyParser.json({ extended: true, limit: '20mb' }));
  app.use(compression());
}

/**
 * app添加swagger接口文档
 * @param {NestExpressApplication} app express应用实例
 */
function addSwagger(app: NestExpressApplication) {
  const options = new DocumentBuilder()
    .setTitle('工程 swagger 文档')
    .setDescription('swagger 接口详情')
    .setVersion('1.0')
    .addTag('功能模块列表')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
}

async function bootstrap() {
  // 创建redis实例
  await createRedisClient();
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix(apiPrefix); // 设置服务器路由前缀(https://docs.nestjs.com/faq/global-prefix)
  addAppGlobalMiddleaware(app);
  addSwagger(app);
  await app.listen(port);
  console.log(`     Application is listening on http://0.0.0.0:${port}`);
  console.log(`     open http://0.0.0.0:${port} swagger for Api`);
}
bootstrap();
