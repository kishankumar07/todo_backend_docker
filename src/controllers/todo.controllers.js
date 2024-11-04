import todoModels from "../models/todo.models.js";
import { getAllTodos,getTodoById,createTodo,editTodo } from "../services/todo.service.js";

//@desc     Get the todos
//route     GET /api/todos/
//@access   Public         
const getTodos = async(req,res)=>{
      try {
            const todos = await getAllTodos();
            res.send(todos);
      } catch (error) {
            console.log('error at getTodos controller:',error.message)
            res.status(500).send({error:"Couldn't fetct all todos"})
      }
}

//@desc     Get the todo by id
//route     GET /api/todos/:id
//@access   Public 
const getTodoId = async(req,res)=>{
      try {
            if(!req.params.id){
                  res.status(400).send({message:"Id should be provided"})
            }
            const todo = await getTodoById(req.params.id);
            res.send(todo);
      } catch (error) {
            console.log('error at getTodoId controller:',error.message)
            res.status(404).send({error:`Couldn't retrieve a todo with id ${req.params.id}`})
      }
}

//@desc     Create Todos
//route     POST /api/todos/
//@access   Public 
const createTodos = async(req,res)=>{
      try {
            const {title,description}= req.body;
            const todo = await createTodo(title,description);
            res.send(todo);
      } catch (error) {
            console.log('error at createTodo:',error.message);
            res.status(500).send({error:"Todo creation failed"})
      }
}
//@desc     Edit the todo by id
//route     PUT /api/todos/:id
//@access   Public 
const editTodos = async(req,res)=>{
      try {
            const {id} = req.params;
            const {title,description} = req.body;
            const todo = await editTodo(id,title,description);
            res.send(todo);
      } catch (error) {
            res.status(404).send({error:`Couldn't find a todo with id ${req.params.id}`})
      }
}

export {
      getTodos,
      getTodoId,
      editTodos,
      createTodos
}