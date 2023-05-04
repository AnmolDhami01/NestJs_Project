"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const ResponseWrapper_1 = require("../ResponseWrappers/ResponseWrapper");
const StatusDescription_1 = require("../ResponseWrappers/StatusDescription");
let TaskService = class TaskService {
    constructor() {
        this.tasks = [
            {
                id: 0,
                name: 'test',
                completed: false,
                description: 'test',
                duration: 1000,
                owner: 'user',
            },
        ];
    }
    async addTask(task) {
        var _a, _b, _c;
        let statusDescription = new StatusDescription_1.default();
        let responseWrapper = new ResponseWrapper_1.default();
        try {
            task.id = ((_c = (_a = this.tasks) === null || _a === void 0 ? void 0 : _a[((_b = this.tasks) === null || _b === void 0 ? void 0 : _b.length) - 1]) === null || _c === void 0 ? void 0 : _c.id) + 1;
            console.log(task);
            this.tasks.push(task);
            responseWrapper.setStatusDescription(statusDescription);
            statusDescription.setStatusCode(200);
            statusDescription.setStatusMessage('Success');
        }
        catch (error) {
            statusDescription.setStatusCode(500);
            statusDescription.setStatusMessage('Internal Server Error');
            return Promise.resolve(responseWrapper);
        }
        return Promise.resolve(responseWrapper);
    }
    async getTaskById(id) {
        var _a, _b;
        let statusDescription = new StatusDescription_1.default();
        let responseWrapper = new ResponseWrapper_1.default();
        try {
            responseWrapper.setStatusDescription(statusDescription);
            const task = (_b = (_a = this.tasks) === null || _a === void 0 ? void 0 : _a.filter((tassk) => tassk.id === id)) === null || _b === void 0 ? void 0 : _b[0];
            if (!task) {
                statusDescription.setStatusCode(220);
                statusDescription.setStatusMessage('No Task found');
                return Promise.resolve(responseWrapper);
            }
            statusDescription.setStatusCode(common_1.HttpStatus.OK);
            statusDescription.setStatusMessage('Success');
            responseWrapper.setTask(task);
        }
        catch (error) {
            statusDescription.setStatusCode(common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            statusDescription.setStatusMessage('Internal Server Error');
            return Promise.resolve(responseWrapper);
        }
        return Promise.resolve(responseWrapper);
    }
    async getAllTask() {
        let statusDescription = new StatusDescription_1.default();
        let responseWrapper = new ResponseWrapper_1.default();
        try {
            responseWrapper.setStatusDescription(statusDescription);
            statusDescription.setStatusCode(200);
            statusDescription.setStatusMessage('Success');
            responseWrapper.setTasks(this.tasks);
        }
        catch (error) {
            statusDescription.setStatusCode(500);
            statusDescription.setStatusMessage('Internal Server Error');
            return Promise.resolve(responseWrapper);
        }
        return Promise.resolve(responseWrapper);
    }
};
TaskService = __decorate([
    (0, common_1.Injectable)()
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task-service.js.map