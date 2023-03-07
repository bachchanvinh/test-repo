import { Request, Response, Router } from "express";
import { TodoController } from "../controllers/Todo.controller";

const router = Router();
const todoController = new TodoController();


router.get('/', (req: Request, res: Response) => { 
    todoController.getTodoList(req,res);
});



export default router;
