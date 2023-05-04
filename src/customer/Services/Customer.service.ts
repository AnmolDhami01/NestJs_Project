import {
  BadRequestException,
  HttpStatus,
  Injectable,
  Inject,
} from '@nestjs/common';
import { Request, Response } from 'express';
import ResponseWrapper from 'src/ResponseWrappers/ResponseWrapper';
import StatusDescription from 'src/ResponseWrappers/StatusDescription';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from '../dto/CustomerDto';
import { Customer as Customer1 } from '../../interface/customerInterface';
@Injectable()
export class CustomerService {
  constructor(
    @Inject('CUSTOMER_MODEL') private customerModel: Model<Customer1>,
  ) {}

  public async getAllCustomers(): Promise<ResponseWrapper> {
    let statusDescription = new StatusDescription();
    let responseWrapper = new ResponseWrapper();
    try {
      responseWrapper.setStatusDescription(statusDescription);
      let customers: Customer[] = await this.customerModel.find({});
      if (customers?.length == 0) {
        statusDescription.setStatusCode(220);
        statusDescription.setStatusMessage('No Data Found');
        return Promise.resolve(responseWrapper);
      }
      responseWrapper.setCustomers(customers);
      statusDescription.setStatusCode(200);
      statusDescription.setStatusMessage('Success');
    } catch (error) {
      statusDescription.setStatusCode(500);
      statusDescription.setStatusMessage('Internal Server Error');
      return Promise.resolve(responseWrapper);
    }
    return Promise.resolve(responseWrapper);
  }

  public async getCustomerById(id: string): Promise<ResponseWrapper> {
    let statusDescription = new StatusDescription();
    let responseWrapper = new ResponseWrapper();
    try {
      responseWrapper.setStatusDescription(statusDescription);
      let customers: Customer = await this.customerModel.findById(id);
      if (!customers) {
        statusDescription.setStatusCode(220);
        statusDescription.setStatusMessage('No Data Found');
        return Promise.resolve(responseWrapper);
      }
      responseWrapper.setCustomer(customers);
      statusDescription.setStatusCode(200);
      statusDescription.setStatusMessage('Success');
    } catch (error) {
      statusDescription.setStatusCode(500);
      statusDescription.setStatusMessage('Internal Server Error');
      return Promise.resolve(responseWrapper);
    }
    return Promise.resolve(responseWrapper);
  }

  public async addCustomer(customer: Customer): Promise<ResponseWrapper> {
    let statusDescription = new StatusDescription();
    let responseWrapper = new ResponseWrapper();
    try {
      responseWrapper.setStatusDescription(statusDescription);
      console.log(customer.name, customer.email, customer.phone);
      if (!customer.name || !customer.email || !customer.phone) {
        statusDescription.setStatusCode(400);
        statusDescription.setStatusMessage('Bad Request');
        return Promise.resolve(responseWrapper);
      }
      let customerr: Customer = await this.customerModel.findOne({
        name: customer.name,
      });
      if (customerr) {
        statusDescription.setStatusCode(215);
        statusDescription.setStatusMessage(
          'Customer with name ' + customer.name + ' already exists',
        );
        return Promise.resolve(responseWrapper);
      }
      let customers: Customer = await this.customerModel.create(customer);
      responseWrapper.setCustomer(customers);
      statusDescription.setStatusCode(200);
      statusDescription.setStatusMessage('Success');
    } catch (error) {
      console.log({ error });
      statusDescription.setStatusCode(500);
      statusDescription.setStatusMessage('Internal Server Error');
      return Promise.resolve(responseWrapper);
    }
    return Promise.resolve(responseWrapper);
  }
}
