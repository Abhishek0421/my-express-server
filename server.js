

const express = require("express");

const app = express();

app.get("/", function(req,res){
    // console.log(request);
    res.send("<h1>Hello World</h1>");
});

app.get("/contact",function(req,res){
    res.send("Contact me at :abhishekchouhan2104@gmail.com")
});
app.get("/about",function(req,res){
    res.send("Hey, I am abhishek chouhan");
});
app.get("/hobbies",function(req,res){
    res.send("Playing Cricket");
});
app.listen(3000 , function(){
    console.log("Server started on port 3000");
});

// const express = require('express')
// const app = express()

// // respond with "hello world" when a GET request is made to the homepage
// app.get('/', (req, res) => {
// //   res.send('hello world')
//      console.log(req);
// })