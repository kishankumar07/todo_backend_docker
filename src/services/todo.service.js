import TodoModel from '../models/todo.models.js'
import mongoose from 'mongoose';

//get all Todos
const getAllTodos = async()=>{
      try {
            const todo = await TodoModel.find();
            return todo;
      } catch (error) {
            throw new Error(error)
      }
}

// Get a todo by Id
const getTodoById = async(id)=>{
      try {
            const todo = await TodoModel.findById(new mongoose.Types.ObjectId(id));
            if(!todo){
                  throw new Error("Todo not found");
            }
            return todo;
      } catch (error) {
            throw new Error(error)
      }
}

//Create a new todo
const createTodo = async(title,description)=>{
      try {
            const todo = new TodoModel({
                  title,description
            });
            await todo.save();
            return todo;
      } catch (error) {
            throw new Error(error)
      }
}

const editTodo = async(id,title,description)=>{
      try {
            const todo = await TodoModel.findById(id);
            if(!todo)throw new Error("Todo not found");
            todo.title = title;
            todo.description = description;
            await todo.save();
            return todo;
      } catch (error) {
            throw new Error('error')
      }
}
export {
      getAllTodos,
      getTodoById,
      createTodo,
      editTodo,
}