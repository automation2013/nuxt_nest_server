import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Req,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { getCookieConfig } from '../../common/utils/cookie';
import { IResponse } from '../../common/interfaces/respons.interface';
import { HttpError } from '../../common/http/error';
import { DemoService } from './demo.service';
import { MethodGetDto } from './dtos/method_get.dto';
import { MethodPostDto } from './dtos/method_post.dto';

@ApiTags('demo示例接口')
@Controller('demo')
export class DemoController {
  constructor(private readonly demoService: DemoService) {}

  @ApiOperation({
    summary: '测试get请求',
    description: '接口功能详情',
  })
  @Get('test/get')
  async methodGet(@Query() methodGetDto: MethodGetDto): Promise<IResponse> {
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
  methodPost(@Body() methodPostDto: MethodPostDto): IResponse {
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
}
