import { DataSource } from 'typeorm';
export declare const databaseProviders1: {
    provide: string;
    useFactory: () => Promise<DataSource>;
}[];
