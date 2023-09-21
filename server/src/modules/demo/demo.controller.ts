import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DemoService } from './demo.service';
import { MethodGetDto } from './dtos/method_get.dto';
import { MethodPostDto } from './dtos/method_post.dto';

@ApiTags('demo示例接口')
@Controller('demo')
export class DemoController {
  constructor(private readonly demoService: DemoService) {}

  @Get('test/get')
  async methodGet(@Query() query: MethodGetDto) {
    console.log(query);
    return await this.demoService.methodGet();
  }

  @ApiOperation({
    summary: '接口功能简述',
    description: '接口功能详情',
  })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post('test/post')
  methodPost(@Body() body: MethodPostDto) {
    console.log(body);
    return body;
  }
}
