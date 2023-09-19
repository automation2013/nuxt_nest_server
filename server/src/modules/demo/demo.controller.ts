import { Controller, Get, Post, Body } from '@nestjs/common';
import { DemoService } from './demo.service';

@Controller('demo')
export class DemoController {
  constructor(private readonly demoService: DemoService) {}

  @Get('test/get')
  async methodGet() {
    return await this.demoService.methodGet();
  }

  @Post('test/post')
  methodPost(@Body() body) {
    return body;
  }
}
