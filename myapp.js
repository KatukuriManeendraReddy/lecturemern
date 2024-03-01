var myexpress=require('express');
var myaxios=require('axios');

const myserver=myexpress();
const port=4000;
myserver.listen(port,()=>{
    console.log("welcome");
});
myserver.get("/",function(req,res){
    res.send("<body bgcolor='lightblue'><h1>welcome!!</h1></body>");
});
myserver.get("/amazon",function(req,res){
    res.sendFile(__dirname+'/pages/amazon.html');
    console.log(__dirname);
});
let options={
    "headers":{
        "x-apikey":"657c537763ede90d96f17207",
    }
}
myserver.get("/users",function(req,res){
    myaxios.get("https://healthtracker-06c0.restdb.io/rest/cctusers",options)
    .then(function(resp){
        res.send(resp.data);
    })
    .catch(function(err){
        res.send(err);
    })
})
myserver.get("*",function(req,res){
    res.redirect("/");
})