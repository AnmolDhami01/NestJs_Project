import ResponseWrapper from 'src/ResponseWrappers/ResponseWrapper';
import { TaskService } from './task-service';
import Task from './dto/task';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    getAllTask(): Promise<ResponseWrapper>;
    getTaskById(id: number): Promise<ResponseWrapper>;
    addTask(task: Task): Promise<ResponseWrapper>;
}
