import { IsString, IsDefined, IsEmail } from 'class-validator';

export class UserDto {
  @IsString()
  @IsEmail()
  @IsDefined()
  email: string;
  @IsString()
  @IsDefined()
  username: string;
  @IsString()
  @IsDefined()
  password: string;
}
