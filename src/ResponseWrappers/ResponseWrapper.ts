import { UserDto } from 'src/user-module/dto/user.dto';
import StatusDescription from './StatusDescription';
import Task from 'src/task-controller/dto/task';
import { Customer } from 'src/customer/dto/CustomerDto';
import { Photo } from 'src/models/photo.entity';

export default class ResponseWrapper {
  statusDescription: StatusDescription;
  users: UserDto[];
  user: UserDto;
  task: Task;
  tasks: Task[];
  customer: Customer;
  customers: Customer[];
  photos: Photo[];
  photo: Photo;

  getStatusDescription() {
    return this.statusDescription;
  }
  setStatusDescription(statusDescription: StatusDescription) {
    this.statusDescription = statusDescription;
  }
  getUsers() {
    return this.users;
  }
  setUsers(users: UserDto[]) {
    this.users = users;
  }
  getUser() {
    return this.user;
  }
  setUser(user: UserDto) {
    this.user = user;
  }
  getTask() {
    return this.task;
  }
  setTask(task: Task) {
    this.task = task;
  }
  getTasks() {
    return this.tasks;
  }
  setTasks(tasks: Task[]) {
    this.tasks = tasks;
  }

  getCustomer() {
    return this.customer;
  }
  setCustomer(customer: Customer) {
    this.customer = customer;
  }

  getCustomers() {
    return this.customers;
  }
  setCustomers(customers: Customer[]) {
    this.customers = customers;
  }

  getPhotos() {
    return this.photos;
  }
  setPhotos(photos: Photo[]) {
    this.photos = photos;
  }

  getPhoto() {
    return this.photo;
  }
  setPhoto(photo: Photo) {
    this.photo = photo;
  }
}
