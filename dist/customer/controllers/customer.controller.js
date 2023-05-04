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
exports.CustomController = void 0;
const common_1 = require("@nestjs/common");
const gaurd_1 = require("../../core/gaurd");
const Interceptor_1 = require("../../core/Interceptor");
const Customer_service_1 = require("../Services/Customer.service");
const CustomerDto_1 = require("../dto/CustomerDto");
let CustomController = class CustomController {
    constructor(customerService) {
        this.customerService = customerService;
    }
    getAllCustomers() {
        return this.customerService.getAllCustomers();
    }
    getCustomerById(id) {
        return this.customerService.getCustomerById(id);
    }
    addCustomer(customer) {
        return this.customerService.addCustomer(customer);
    }
};
__decorate([
    (0, common_1.Get)('getAllCustomers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CustomController.prototype, "getAllCustomers", null);
__decorate([
    (0, common_1.Get)('getCustomerById'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomController.prototype, "getCustomerById", null);
__decorate([
    (0, common_1.Post)('addCustomer'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CustomerDto_1.Customer]),
    __metadata("design:returntype", Promise)
], CustomController.prototype, "addCustomer", null);
CustomController = __decorate([
    (0, common_1.Controller)('/customer/v1/'),
    (0, common_1.UseGuards)(gaurd_1.AuthGaurd),
    (0, common_1.UseInterceptors)(Interceptor_1.LoggerInterceptor),
    __metadata("design:paramtypes", [Customer_service_1.CustomerService])
], CustomController);
exports.CustomController = CustomController;
//# sourceMappingURL=customer.controller.js.map