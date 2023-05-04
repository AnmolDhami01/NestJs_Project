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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_dto_1 = require("./dto/user.dto");
const gaurd_1 = require("../core/gaurd");
const Interceptor_1 = require("../core/Interceptor");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getHello(req, res) {
        return this.userService.getHello(req, res);
    }
    async getUsers() {
        return this.userService.getUsers();
    }
    addUser(user, req, res) {
        return this.userService.addUser(user, req, res);
    }
    deleteUser(email) {
        console.log({ email });
        return this.userService.deleteUser(email);
    }
};
__decorate([
    (0, common_1.Get)('helloWorld'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], UserController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('getUsers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Post)('addUser'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto, Object, Object]),
    __metadata("design:returntype", Object)
], UserController.prototype, "addUser", null);
__decorate([
    (0, common_1.Post)('deleteUser/:email'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], UserController.prototype, "deleteUser", null);
UserController = __decorate([
    (0, common_1.Controller)('/user/v1/'),
    (0, common_1.UseGuards)(gaurd_1.AuthGaurd),
    (0, common_1.UseInterceptors)(Interceptor_1.LoggerInterceptor),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map