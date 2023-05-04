"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSqlController = void 0;
const common_1 = require("@nestjs/common");
const gaurd_1 = require("../core/gaurd");
const Interceptor_1 = require("../core/Interceptor");
const userSql_service_1 = require("./userSql-service");
let userSqlController = class userSqlController {
    constructor(userSqlService) {
        this.userSqlService = userSqlService;
    }
};
userSqlController = __decorate([
    (0, common_1.Controller)('/userSql/v1/'),
    (0, common_1.UseGuards)(gaurd_1.AuthGaurd),
    (0, common_1.UseInterceptors)(Interceptor_1.LoggerInterceptor),
    __metadata("design:paramtypes", [userSql_service_1.userSqlService])
], userSqlController);
exports.userSqlController = userSqlController;
//# sourceMappingURL=userSql-controller.js.map