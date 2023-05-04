import * as mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  createdAt: { type: Date, default: Date.now },
});
