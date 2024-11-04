import express from 'express'
import {conntectToDatabases,port} from './config/default.config.js'
import todoRoutes from './src/routes/todo.routes.js'

const app  = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

conntectToDatabases();

app.use('/api/todos',todoRoutes);

app.listen(port,()=>console.log(`http://localhost:${port}`))