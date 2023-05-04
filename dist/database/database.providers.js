"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: () => mongoose.connect('mongodb+srv://Anmol:AnmolDhami@cluster0.t2rax.mongodb.net/nestApp?retryWrites=true&w=majority', {
            autoCreate: true,
        }),
    },
];
//# sourceMappingURL=database.providers.js.map