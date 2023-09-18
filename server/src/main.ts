import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('config');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bodyParser = require('body-parser');
import helmet from 'helmet';
const port = config.get('server.port');
const apiPrefix = config.get('server.apiPrefix');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix(apiPrefix); // 设置服务器路由前缀(https://docs.nestjs.com/faq/global-prefix)
  (() => {
    // 设置全局中间件
    app.use(helmet());
    app.use(bodyParser.json({ extended: true, limit: '20mb' }));
  })();
  await app.listen(port);
}
bootstrap();
