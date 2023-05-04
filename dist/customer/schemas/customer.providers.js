"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerProviders = void 0;
const customer_schema_1 = require("./customer.schema");
exports.customerProviders = [
    {
        provide: 'CUSTOMER_MODEL',
        useFactory: (connection) => connection.model('Customer', customer_schema_1.CustomerSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=customer.providers.js.map