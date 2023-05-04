import { Photo } from 'src/models/photo.entity';
import { DataSource } from 'typeorm';

export const databaseProviders1 = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        database: 'test1',
        entities: [Photo],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
