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
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const ResponseWrapper_1 = require("../../ResponseWrappers/ResponseWrapper");
const StatusDescription_1 = require("../../ResponseWrappers/StatusDescription");
const mongoose_1 = require("mongoose");
let CustomerService = class CustomerService {
    constructor(customerModel) {
        this.customerModel = customerModel;
    }
    async getAllCustomers() {
        let statusDescription = new StatusDescription_1.default();
        let responseWrapper = new ResponseWrapper_1.default();
        try {
            responseWrapper.setStatusDescription(statusDescription);
            let customers = await this.customerModel.find({});
            if ((customers === null || customers === void 0 ? void 0 : customers.length) == 0) {
                statusDescription.setStatusCode(220);
                statusDescription.setStatusMessage('No Data Found');
                return Promise.resolve(responseWrapper);
            }
            responseWrapper.setCustomers(customers);
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
    async getCustomerById(id) {
        let statusDescription = new StatusDescription_1.default();
        let responseWrapper = new ResponseWrapper_1.default();
        try {
            responseWrapper.setStatusDescription(statusDescription);
            let customers = await this.customerModel.findById(id);
            if (!customers) {
                statusDescription.setStatusCode(220);
                statusDescription.setStatusMessage('No Data Found');
                return Promise.resolve(responseWrapper);
            }
            responseWrapper.setCustomer(customers);
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
    async addCustomer(customer) {
        let statusDescription = new StatusDescription_1.default();
        let responseWrapper = new ResponseWrapper_1.default();
        try {
            responseWrapper.setStatusDescription(statusDescription);
            console.log(customer.name, customer.email, customer.phone);
            if (!customer.name || !customer.email || !customer.phone) {
                statusDescription.setStatusCode(400);
                statusDescription.setStatusMessage('Bad Request');
                return Promise.resolve(responseWrapper);
            }
            let customerr = await this.customerModel.findOne({
                name: customer.name,
            });
            if (customerr) {
                statusDescription.setStatusCode(215);
                statusDescription.setStatusMessage('Customer with name ' + customer.name + ' already exists');
                return Promise.resolve(responseWrapper);
            }
            let customers = await this.customerModel.create(customer);
            responseWrapper.setCustomer(customers);
            statusDescription.setStatusCode(200);
            statusDescription.setStatusMessage('Success');
        }
        catch (error) {
            console.log({ error });
            statusDescription.setStatusCode(500);
            statusDescription.setStatusMessage('Internal Server Error');
            return Promise.resolve(responseWrapper);
        }
        return Promise.resolve(responseWrapper);
    }
};
CustomerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('CUSTOMER_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=Customer.service.js.map