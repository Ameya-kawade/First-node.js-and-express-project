const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res) => 
       res.sendFile(__dirname + "/index.html")
);

app.listen(port,() => 
          console.log("Server started on port 3000")
          );

app.post("/", function (req,res){
    let n1 = Number(req.body.n1);
    let n2 = Number(req.body.n2);
    let result  = n1 + n2;
    res.send("The answer is : " + result);
});