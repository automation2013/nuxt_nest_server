import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MethodPostDto {
  @ApiProperty({
    description: '字段描述',
  })
  @IsString()
  readonly namePost: string;
}
