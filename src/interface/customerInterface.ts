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
export interface Customer extends Document {
  name: string;

  email: string;

  phone: number;

  createdAt: Date;
}
