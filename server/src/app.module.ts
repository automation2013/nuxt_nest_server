import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
// 全局管道
import { ClassValidationPipe } from './pipes/class_validation.pipe';
// 公共模块
import { TypeormModule } from './common/database/typeorm_module';
// 业务模块
import { DemoModule } from './modules/demo/demo.module';

@Module({
  imports: [
    // 公共模块
    TypeormModule,
    // 业务模块
    DemoModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ClassValidationPipe,
    },
  ],
})
export class AppModule {}
