import { TypeOrmModule } from '@nestjs/typeorm';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('config');
const TypeormModule = TypeOrmModule.forRoot({
  type: 'mysql',
  host: config.get('database.typeorm.host'),
  port: config.get('database.typeorm.port'),
  username: config.get('database.typeorm.username'),
  password: config.get('database.typeorm.password'),
  database: config.get('database.typeorm.database'),
  entities: config.get('database.typeorm.entities'),
  synchronize: config.get('database.typeorm.synchronize'),
  autoLoadEntities: config.get('database.typeorm.autoLoadEntities'),
});
export { TypeormModule };
