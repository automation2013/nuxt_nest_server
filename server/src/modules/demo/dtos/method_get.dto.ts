import { IsString, IsNotEmpty } from 'class-validator';

export class MethodGetDto {
  @IsString()
  @IsNotEmpty()
  readonly nameGet: string;
}
