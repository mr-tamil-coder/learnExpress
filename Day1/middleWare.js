const express=require("express")
const http=require("http")
const app=express();

//using middle ware
/* app.use(()=>{
    console.log("Hurray i amm working");
})
*/

// middleware send to one by one
app.use((req,res,next)=>{
    console.log("First Middleware");
    next();
})
app.use((req,res,next)=>{
    console.log("Second Middleware");
    next();

})
app.use((req,res)=>{
    console.log("Third Middleware");
    // res.send("<h1>  I am vinoth </h1>")
    // res.send({name:"vinoth"}) content type json
})

// 3rd middleware tha response expect panum
const server = http.createServer(app)
app.listen(3000);