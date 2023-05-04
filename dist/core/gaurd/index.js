"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AuthGaurd_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGaurd = void 0;
const common_1 = require("@nestjs/common");
let AuthGaurd = AuthGaurd_1 = class AuthGaurd {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const response = context.switchToHttp().getResponse();
        return this.validateRequest(request, response);
        throw new Error('Method not implemented.');
    }
    validateRequest(request, response) {
        var _a;
        const logger = new common_1.Logger(AuthGaurd_1.name);
        logger.log('In gaurd');
        const token = (_a = request.headers) === null || _a === void 0 ? void 0 : _a['authorization'];
        if (token === null || token === void 0 ? void 0 : token.startsWith('Bearer ')) {
            return Promise.resolve(Boolean);
        }
        else {
            throw new common_1.UnauthorizedException();
        }
    }
};
AuthGaurd = AuthGaurd_1 = __decorate([
    (0, common_1.Injectable)()
], AuthGaurd);
exports.AuthGaurd = AuthGaurd;
//# sourceMappingURL=index.js.map