import ResponseWrapper from 'src/ResponseWrappers/ResponseWrapper';
import { CustomerService } from '../Services/Customer.service';
import { Customer } from '../dto/CustomerDto';
export declare class CustomController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    getAllCustomers(): Promise<ResponseWrapper>;
    getCustomerById(id: string): Promise<ResponseWrapper>;
    addCustomer(customer: Customer): Promise<ResponseWrapper>;
}
