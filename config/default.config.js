// If you were running MongoDB and Node.js on the same server, you would access MongoDB like so:
// mongodb://localhost:27017/database-name
// With this Kubernetes setup, that line of code would become:
// mongodb://mongo:27017/database-name

import dotenv from 'dotenv'
import conntectToDatabase from './dbConnect.js'
dotenv.config();

// export const dbUrl = process.env.MONGO_URI;
export const port = process.env.PORT
export const conntectToDatabases = conntectToDatabase;
