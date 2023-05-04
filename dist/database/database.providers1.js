"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders1 = void 0;
const photo_entity_1 = require("../models/photo.entity");
const typeorm_1 = require("typeorm");
exports.databaseProviders1 = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                database: 'test1',
                entities: [photo_entity_1.Photo],
                synchronize: true,
            });
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=database.providers1.js.map