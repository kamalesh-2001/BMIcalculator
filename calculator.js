//jshint esversion:6
const express=require("express");
const bodyparser=require("body-parser");
const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.get("/bmicalculator",function(req,res) {
  res.sendfile(__dirname+"/bmicalculator.html");
});
app.post("/bmicalculator",function(req,res) {
  var weight=parseFloat(req.body.weight);
  var height=parseFloat(req.body.height);
  var bmi=weight/(height*height);
  res.send("Your BMI is:"+ bmi);
});
app.listen(3000,function() {
  console.log("server is running");
});
