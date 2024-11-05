var express=require("express");
var http=require("http");
var bodyParser=require("body-parser")
var path = require("path")
var indexRouter=require('./Routes/index')
var mongo=require("mongoose")
var config=require("./Config/db.json")
mongo.connect(config.url).then(()=>console.log("database connected")).catch(()=>console.log("database not connected"))
/*******************************/

var app=express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");


//pour perser les data json depuis postman
app.use(bodyParser.json())

app.use("/index",indexRouter)
const server = http.createServer(app, console.log("server run"));
const io = require("socket.io")(server);

io.on("connection", (socket) => {
    console.log('User connected');

    socket.on("aaaaa", (data) =>{
        console.log("notre message serveur : " + data);
        io.emit("aaaaa",data)

    })

    socket.on("typingg", (data) =>{
        console.log("notre message serveur : " + data);
        socket.broadcast.emit("typingg",data)

    })

    socket.on("disconnect", () => {
        console.log('user disconnected');
    });
});





server.listen(3000);

module.exports=app;