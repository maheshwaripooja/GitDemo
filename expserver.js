const express = require("express");

const bodyParser=require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.send("welcome to my server123");
});

app.get("/about", function(req,res){
    res.send("<h1>welcome to my aboutpage</h1>");
});


app.get("/calculator", function(req,res){
res.sendFile(__dirname + "/index.html");  // this way is called as absolute path and if onlly gving /index.html  
                                          //this called as relative path which is not recommended
});

app.post("/calculator",function(req,res){
    //res.send("post reqst received");
    console.log(req.body);
    let n1=Number(req.body.v1);
    let n2=Number(req.body.v2);
    let sum=n1+n2;
    res.send("the sum of 2 digits are :"+sum);
});

app.get("/bmi", function(req,res){
    res.sendFile(__dirname + "/bmi.html");  // this way is called as absolute path and if onlly gving /index.html  
                                              //this called as relative path which is not recommended
    });

    app.post("/bmi",function(req,res){
        let w1=Number(req.body.weight);
        let h1=Number(req.body.height);
        let bmi=w1/(h1*h1);
        res.send("the BMI :"+bmi);
    });

app.listen(5000, function(req,res){
    console.log("server is running at port no 5000");
});

