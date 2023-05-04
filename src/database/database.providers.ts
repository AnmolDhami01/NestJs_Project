import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://Anmol:AnmolDhami@cluster0.t2rax.mongodb.net/nestApp?retryWrites=true&w=majority',
        {
          autoCreate: true,
        },
      ),
  },
];
