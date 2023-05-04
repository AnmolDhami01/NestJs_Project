import ResponseWrapper from 'src/ResponseWrappers/ResponseWrapper';
import { Model } from 'mongoose';
import { Customer } from '../dto/CustomerDto';
import { Customer as Customer1 } from '../../interface/customerInterface';
export declare class CustomerService {
    private customerModel;
    constructor(customerModel: Model<Customer1>);
    getAllCustomers(): Promise<ResponseWrapper>;
    getCustomerById(id: string): Promise<ResponseWrapper>;
    addCustomer(customer: Customer): Promise<ResponseWrapper>;
}
