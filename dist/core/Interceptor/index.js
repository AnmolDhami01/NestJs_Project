"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
class LoggerInterceptor {
    intercept(context, next) {
        const logger = new common_1.Logger(LoggerInterceptor.name);
        logger.log('Before Request Interceptor...');
        const now = Date.now();
        return next
            .handle()
            .pipe((0, operators_1.tap)(() => logger.log('After Request Interceptor...')));
    }
}
exports.LoggerInterceptor = LoggerInterceptor;
//# sourceMappingURL=index.js.map