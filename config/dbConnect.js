import mongoose from 'mongoose'


const conntectToDatabase = ()=>{
      mongoose.Promise = global.Promise;

      mongoose.connect(process.env.dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })

          mongoose.connection.on("error", (err) => {
            console.error(`Could not connect to the database: ${err}`);
            process.exit();
          });

          mongoose.connection.once("open", () => {
            console.log("Successfully connected to the database");
          });
}

export default conntectToDatabase;