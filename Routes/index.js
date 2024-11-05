var express = require ("express")
var route = express.Router()
var User = require("../Models/user")
var userController = require("../Controller/userController")
var valider=require("../Middl/valider")

route.get("/show", function (req,res){
    console.log('notre classe 2CINFO1')
})


//fonction hedhy nekhdmouch maaha fel CRID juste jarabna beeha 
route.get("/adduser/:username/:email/:cin",function(req,res){
    new User ({
        username : req.params.username,
        email: req.params.email,
        cin :req.params.cin
    }).save();
    res.send("test");
})
//*

route.post("/add",valider,userController.add) 


route.get("/showuser", userController.showuser)


route.get("/showbyId/:id", userController.showbyId)


route.get("/showusername/:name", userController.showusername )


route.put("/update/:id", userController.update)


route.delete("/delete/:id", userController.deleteUser)

route.get("/chatroute",function (req, res){
    res.render('chat')      //chat nom de la page .twig
    });


module.exports= route