var express = require("express");
var app = express();
var multer = require("multer");
var upload = multer({dest: "client/uploads/"}) // wo die datei abgelegt wird


app.use(express.static(__dirname+"/client"))

app.post("/", upload.any(), function (req,res){
    res.send({"size":req.files[0].size});
    
})


app.listen((process.env.PORT||8080|| 5000), function(){
    console.log("roger, we are online...");
})