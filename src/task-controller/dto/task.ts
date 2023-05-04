import { IsString, IsDefined, IsBoolean, IsNumber } from 'class-validator';
export default class Task {
  id: number;
  @IsString()
  @IsDefined()
  name: string;
  @IsBoolean()
  @IsDefined()
  completed: boolean;
  @IsString()
  @IsDefined()
  description: string;
  @IsString()
  @IsDefined()
  owner: string;
  @IsNumber()
  @IsDefined()
  duration: number;
}
