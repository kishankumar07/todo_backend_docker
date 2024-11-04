import express from 'express'
import {getTodos,getTodoId,editTodos,createTodos} from '../controllers/todo.controllers.js'


const router  = express.Router();

router.get('/',getTodos);

router.get('/:id',getTodoId);

router.post("/",createTodos);

router.put('/:id',editTodos)

export default router;