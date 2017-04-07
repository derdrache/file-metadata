var express = require("express");
var app = express();


app.use(express.static(__dirname+"/client"))


app.listen((process.env.PORT||8080|| 5000), function(){
    console.log("roger, we are online...");
})