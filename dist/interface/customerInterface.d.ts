import { Document } from 'mongoose';
export interface Customer extends Document {
    name: string;
    email: string;
    phone: number;
    createdAt: Date;
}
