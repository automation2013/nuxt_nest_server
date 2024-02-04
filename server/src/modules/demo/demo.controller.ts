import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Req,
  Res,
  HttpStatus,
  Session,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { HttpError, IHttpResponse } from 'common_content';
import { getCookieConfig } from '../../common/utils/cookie';
import { DemoService } from './demo.service';
import { MethodGetDto } from './dtos/method_get.dto';
import { MethodPostDto } from './dtos/method_post.dto';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('config');

@ApiTags('demo示例接口')
@Controller('demo')
export class DemoController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly demoService: DemoService) {}

  @ApiOperation({
    summary: '测试get请求',
    description: '接口功能详情',
  })
  @Get('test/get')
  async methodGet(@Query() methodGetDto: MethodGetDto): Promise<IHttpResponse> {
    console.log(methodGetDto);
    const res = await this.demoService.methodGet();
    return {
      status: 0,
      data: { res },
    };
  }

  @ApiOperation({
    summary: '测试post请求',
    description: '接口功能详情',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @Post('test/post')
  methodPost(@Body() methodPostDto: MethodPostDto): IHttpResponse {
    console.log(methodPostDto);
    return {
      status: -1,
      errcode: HttpError.Demo.TestType.errcode,
      errmsg: HttpError.Demo.TestType.errcode,
    };
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

  @ApiOperation({
    summary: '测试session',
    description: '接口功能详情',
  })
  @Get('test/session')
  methodSession(@Session() session: Record<string, any>) {
    if (!config.get('session.isOpen')) {
      return {
        status: 0,
        data: {
          warning: 'session未打开，请在配置文件中配置 “session.isOpen” 字段',
        },
      };
    }
    const lastSession = JSON.stringify(session.testSession || null);
    session.testSession = { test: 'test-session' };
    return {
      status: 0,
      data: {
        oldSession: JSON.parse(lastSession),
      },
    };
  }
}
