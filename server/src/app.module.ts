import { Module, Dependencies } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { DemoModule } from './modules/demo/demo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('config');
@Dependencies(DataSource)
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: config.get('database.typeorm.host'),
      port: config.get('database.typeorm.port'),
      username: config.get('database.typeorm.username'),
      password: config.get('database.typeorm.password'),
      database: config.get('database.typeorm.database'),
      entities: config.get('database.typeorm.entities'),
      synchronize: config.get('database.typeorm.synchronize'),
    }),
    DemoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
