import { Connection } from 'mongoose';
import { CustomerSchema } from './customer.schema';

export const customerProviders = [
  {
    provide: 'CUSTOMER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Customer', CustomerSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
