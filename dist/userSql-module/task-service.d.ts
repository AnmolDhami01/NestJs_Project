import ResponseWrapper from 'src/ResponseWrappers/ResponseWrapper';
import Task from './dto/task';
export declare class TaskService {
    tasks: Task[];
    addTask(task: Task): Promise<ResponseWrapper>;
    getTaskById(id: number): Promise<ResponseWrapper>;
    getAllTask(): Promise<ResponseWrapper>;
}
