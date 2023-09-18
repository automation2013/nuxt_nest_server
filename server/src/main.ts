import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const config = require('config');

const port = config.get('server.port');
const apiPrefix = config.get('server.apiPrefix');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix(apiPrefix); // 设置服务器路由前缀(https://docs.nestjs.com/faq/global-prefix)
  await app.listen(port);
}
bootstrap();
