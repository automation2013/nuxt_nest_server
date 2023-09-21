import { Controller, Get, Post, Body, Query, Req, Res } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DemoService } from './demo.service';
import { MethodGetDto } from './dtos/method_get.dto';
import { MethodPostDto } from './dtos/method_post.dto';
import { Request, Response } from 'express';
import { getCookieConfig } from '../../common/utils/cookie';

@ApiTags('demo示例接口')
@Controller('demo')
export class DemoController {
  constructor(private readonly demoService: DemoService) {}

  @ApiOperation({
    summary: '测试get请求',
    description: '接口功能详情',
  })
  @Get('test/get')
  async methodGet(@Query() methodGetDto: MethodGetDto) {
    console.log(methodGetDto);
    return await this.demoService.methodGet();
  }

  @ApiOperation({
    summary: '测试post请求',
    description: '接口功能详情',
  })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post('test/post')
  methodPost(@Body() methodPostDto: MethodPostDto) {
    console.log(methodPostDto);
    return methodPostDto;
  }

  @ApiOperation({
    summary: '测试cookie',
    description: '接口功能详情',
  })
  @Get('test/cookie')
  methodCookie(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ) {
    const cookieConfig = getCookieConfig('test-cookie');
    const cookies = request.cookies;
    const signedCookies = request.signedCookies;
    response.cookie('test-cookie', 'aaabbb', cookieConfig);
    return {
      cookies,
      signedCookies,
    };
  }
}
