import { Module } from '@nestjs/common';
// 公共模块
import { TypeormModule } from './common/database/typeorm_module';
// 业务模块
import { DemoModule } from './modules/demo/demo.module';

@Module({
  imports: [
    // 公共模块
    TypeormModule,
    //业务模块
    DemoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
