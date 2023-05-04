import * as mongoose from 'mongoose';
export declare const CustomerSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: Date;
    email?: string;
    name?: string;
    phone?: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: Date;
    email?: string;
    name?: string;
    phone?: number;
}>> & Omit<mongoose.FlatRecord<{
    createdAt: Date;
    email?: string;
    name?: string;
    phone?: number;
}> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
