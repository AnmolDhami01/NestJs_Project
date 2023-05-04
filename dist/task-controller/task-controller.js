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
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const gaurd_1 = require("../core/gaurd");
const Interceptor_1 = require("../core/Interceptor");
const task_service_1 = require("./task-service");
const task_1 = require("./dto/task");
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    getAllTask() {
        return this.taskService.getAllTask();
    }
    getTaskById(id) {
        return this.taskService.getTaskById(id);
    }
    addTask(task) {
        return this.taskService.addTask(task);
    }
};
__decorate([
    (0, common_1.Get)('getAllTask'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getAllTask", null);
__decorate([
    (0, common_1.Get)('getTaskById'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getTaskById", null);
__decorate([
    (0, common_1.Post)('addTask'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task_1.default]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "addTask", null);
TaskController = __decorate([
    (0, common_1.Controller)('/task/v1/'),
    (0, common_1.UseGuards)(gaurd_1.AuthGaurd),
    (0, common_1.UseInterceptors)(Interceptor_1.LoggerInterceptor),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
exports.TaskController = TaskController;
//# sourceMappingURL=task-controller.js.map