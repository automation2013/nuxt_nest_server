import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MethodGetDto {
  @ApiProperty({
    description: '字段描述',
  })
  @IsString()
  @IsNotEmpty()
  readonly nameGet: string;
}
