"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const ResponseWrapper_1 = require("../ResponseWrappers/ResponseWrapper");
const StatusDescription_1 = require("../ResponseWrappers/StatusDescription");
let UserService = class UserService {
    constructor() {
        this.users = [
            {
                email: 'new',
                username: 'admin',
                password: 'password',
            },
            {
                email: 'shyam',
                username: 'shyam',
                password: 'password',
            },
            {
                email: 'nikhil',
                username: 'nikhil',
                password: 'password',
            },
            {
                email: 'rajesh',
                username: 'rajesh',
                password: 'password',
            },
            {
                email: 'paras',
                username: 'paras',
                password: 'password',
            },
        ];
    }
    getHello(req, res) {
        let statusDescription = new StatusDescription_1.default();
        statusDescription.setStatusCode(200);
        statusDescription.setStatusMessage('Success');
        return res.status(common_1.HttpStatus.OK).json({ statusDescription });
    }
    addUser(user, req, res) {
        if (!user.email && !user.username && !user.password) {
            throw new common_1.BadRequestException('Bad request');
        }
        return user;
    }
    getUsers() {
        let statusDescription = new StatusDescription_1.default();
        let responseWrapper = new ResponseWrapper_1.default();
        try {
            responseWrapper.setStatusDescription(statusDescription);
            statusDescription.setStatusCode(200);
            statusDescription.setStatusMessage('Success');
            responseWrapper.setUsers(this.users);
        }
        catch (error) {
            statusDescription.setStatusCode(500);
            statusDescription.setStatusMessage('Internal Server Error');
            return Promise.resolve(responseWrapper);
        }
        return Promise.resolve(responseWrapper);
    }
    deleteUser(email) {
        let user;
        return user;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map