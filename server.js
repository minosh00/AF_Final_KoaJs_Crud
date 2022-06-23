const Koa = require("koa");
const app = new Koa();
const parser = require("koa-bodyparser");
const cors = require("@koa/cors");
const mongoose = require("mongoose");




const PORT = process.env.PORT || 8080;




require('dotenv').config();

app.use(cors({
  
  }));
  

  app.use(parser())
  .use(cors())
  
    
mongoose.connect(
    process.env.CONNECT, {
      
    
    })
    .then(() => {
      console.log("Mongo DB connected successfully");
    })
  
    .catch((err) => console.log("DB connection failed", err));
  
  app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
  });