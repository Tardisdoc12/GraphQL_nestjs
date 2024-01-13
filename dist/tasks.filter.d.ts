import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
export declare class TasksFilter<T> implements ExceptionFilter {
    catch(exception: T, host: ArgumentsHost): void;
}
