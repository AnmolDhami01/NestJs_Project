"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSqlModule = void 0;
const common_1 = require("@nestjs/common");
const userSql_controller_1 = require("./userSql.controller");
const userSql_service_1 = require("./userSql.service");
const photo_providers_1 = require("../providers/photo.providers");
const database_module_1 = require("../database/database.module");
let userSqlModule = class userSqlModule {
};
userSqlModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [userSql_controller_1.userSqlController],
        providers: [...photo_providers_1.photoProviders, userSql_service_1.userSqlService],
        exports: [userSql_service_1.userSqlService],
    })
], userSqlModule);
exports.userSqlModule = userSqlModule;
//# sourceMappingURL=userSql.module.js.map