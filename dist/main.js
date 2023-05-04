"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const filter_1 = require("./user-module/filter");
const swagger_1 = require("@nestjs/swagger");
const swagger_2 = require("./swagger/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
    }));
    app.setGlobalPrefix('nest');
    app.enableCors();
    app.useGlobalFilters(new filter_1.HttpExceptionFilter());
    swagger_1.SwaggerModule.setup('nest', app, (0, swagger_2.createDocument)(app));
    await app.listen(8000);
}
bootstrap();
//# sourceMappingURL=main.js.map