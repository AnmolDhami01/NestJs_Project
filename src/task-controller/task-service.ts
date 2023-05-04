import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
// import {
//   ResponseWrapper,
//   StatusDescription,
// } from 'src/interface/ResponseStatus';

import { Request, Response } from 'express';
import ResponseWrapper from 'src/ResponseWrappers/ResponseWrapper';
import StatusDescription from 'src/ResponseWrappers/StatusDescription';
import Task from './dto/task';
@Injectable()
export class TaskService {
  tasks: Task[] = [
    {
      id: 0,
      name: 'test',
      completed: false,
      description: 'test',
      duration: 1000,
      owner: 'user',
    },
  ];

  public async addTask(task: Task): Promise<ResponseWrapper> {
    let statusDescription = new StatusDescription();
    let responseWrapper = new ResponseWrapper();
    try {
      task.id = this.tasks?.[this.tasks?.length - 1]?.id + 1;
      console.log(task);
      this.tasks.push(task);
      responseWrapper.setStatusDescription(statusDescription);
      statusDescription.setStatusCode(200);
      statusDescription.setStatusMessage('Success');
    } catch (error) {
      statusDescription.setStatusCode(500);
      statusDescription.setStatusMessage('Internal Server Error');
      return Promise.resolve(responseWrapper);
    }
    return Promise.resolve(responseWrapper);
  }

  public async getTaskById(id: number): Promise<ResponseWrapper> {
    let statusDescription = new StatusDescription();
    let responseWrapper = new ResponseWrapper();
    try {
      responseWrapper.setStatusDescription(statusDescription);

      const task: Task = this.tasks?.filter((tassk) => tassk.id === id)?.[0];

      if (!task) {
        statusDescription.setStatusCode(220);
        statusDescription.setStatusMessage('No Task found');
        return Promise.resolve(responseWrapper);
      }

      statusDescription.setStatusCode(HttpStatus.OK);
      statusDescription.setStatusMessage('Success');

      responseWrapper.setTask(task);
    } catch (error) {
      statusDescription.setStatusCode(HttpStatus.INTERNAL_SERVER_ERROR);
      statusDescription.setStatusMessage('Internal Server Error');
      return Promise.resolve(responseWrapper);
    }
    return Promise.resolve(responseWrapper);
  }

  public async getAllTask(): Promise<ResponseWrapper> {
    let statusDescription = new StatusDescription();
    let responseWrapper = new ResponseWrapper();
    try {
      responseWrapper.setStatusDescription(statusDescription);
      statusDescription.setStatusCode(200);
      statusDescription.setStatusMessage('Success');
      responseWrapper.setTasks(this.tasks);
    } catch (error) {
      statusDescription.setStatusCode(500);
      statusDescription.setStatusMessage('Internal Server Error');
      return Promise.resolve(responseWrapper);
    }
    return Promise.resolve(responseWrapper);
  }
}
