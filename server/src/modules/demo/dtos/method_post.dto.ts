import { IsString } from 'class-validator';

export class MethodPostDto {
  @IsString()
  namePost: string;
}
