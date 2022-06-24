const  Koa = require('koa');

const bodyParser = require('koa-bodyParser');
const cors = require('@koa/cors');



const productRoutes = require('./routes/ProductRoutes');

const app = new Koa();

app.use(cors({
    origin: "http://localhost:1234",
    
}
  
));

   
 
  


app.use(bodyParser());


app.use(productRoutes.routes()).use(productRoutes.allowedMethods());


//setup connection 

app.listen(3000);
console.log("application is running on port 3000")

