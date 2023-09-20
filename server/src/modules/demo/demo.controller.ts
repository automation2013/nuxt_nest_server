import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { DemoService } from './demo.service';
import { MethodGetDto } from './dtos/method_get.dto';
import { MethodPostDto } from './dtos/method_post.dto';
import { ClassValidationPipe } from '../../common/pipes/class_validation.pipe';
@Controller('demo')
export class DemoController {
  constructor(private readonly demoService: DemoService) {}

  @Get('test/get')
  async methodGet(@Query(new ClassValidationPipe()) query: MethodGetDto) {
    console.log(query);
    return await this.demoService.methodGet();
  }

  @Post('test/post')
  methodPost(@Body(new ClassValidationPipe()) body: MethodPostDto) {
    console.log(body);
    return body;
  }
}
