import { Request, Response, Router } from "express";
import { Todo } from '../models/Todo.model';

const todoList: Todo[] = [
                        // { id: '1', text: 'Todo 1' },
                        // { id: '2', text: 'Todo 2' },
                        // { id: '3', text: 'Todo 3' },
                        ];

export class TodoController {
    getTodoList(req: Request, res: Response) {
        res.status(200).json({ 'todoList': todoList });
    }
}