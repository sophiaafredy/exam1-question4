 //jshint esversion:6

// fill in your code here...

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  var num1 = Number(req.body.n1);
  
  var result1 = (num1 * num1 * num1) * (4/3*(Math.PI));

  var result2 = (num1 * num1) * (4*(Math.PI));

  res.send("The area of the circle is " + result1);
  
  res.send("The circumference of the circle is " + result2);
});


//this gets the response from the web page to this placeholder

app.listen(3000, function() {
  console.log ("Server is running on port 3000")
});