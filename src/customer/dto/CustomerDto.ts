import { StringDecoder } from 'string_decoder';
import { Document } from 'mongoose';
import {
  IsString,
  IsDefined,
  IsBoolean,
  IsNumber,
  MinLength,
  MaxLength,
} from 'class-validator';
export class Customer {
  //   @IsString()
  //   @IsDefined()
  name: string;
  //   @IsString()
  //   @IsDefined()
  email: string;
  //   @IsString()
  //   @IsNumber()
  //   @MinLength(10)
  //   @MaxLength(11)
  phone: number;

  createdAt: Date;

  //   getName(): string {
  //     return this.name;
  //   }
  //   setName(value: string) {
  //     this.name = value;
  //   }

  //   getEmail(): string {
  //     return this.email;
  //   }
  //   setEmail(value: string) {
  //     this.email = value;
  //   }

  //   getPhone(): number {
  //     return this.phone;
  //   }
  //   setPhone(value: number) {
  //     this.phone = value;
  //   }

  //   getCreatedAt(): Date {
  //     return this.createdAt;
  //   }
  //   setCreatedAt(value: Date) {
  //     this.createdAt = value;
  //   }
}
