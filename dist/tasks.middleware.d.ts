import { NestMiddleware } from '@nestjs/common';
export declare class TasksMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
