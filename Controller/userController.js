var User = require ("../Models/user")

async function add (req,res){
    try{
    //console.log(req.body)
    const user=new User(req.body)
    await user.save()
    res.status(200).send("good added");
    } catch (err) {
        res.status(400).send(err)
    }
}


async function showuser (req,res){
    try{
    const user= await User.find()
    res.json(user)
    }catch(err){
        res.status(400).send(err)
    }
}

async function showbyId(req,res){
    try{
        const user= await User.findById(req.params.id);
        res.json(user)
    } catch(err){
    res.status(400).send(err)
    }
}

async function showusername (req,res){
    try{
        const username = req.params.name
        const user= await User.findOne({username});
        res.json(user)
    } catch(err){
    res.status(400).send(err)
    }
}


async function update (req,res){
    try{
        const user= await User.findByIdAndUpdate(req.params.id, req.body,{new:true});
        //const userupdate=await User.findById(req.params.id)
        res.status(200).json(user)
    } catch(err){
    res.status(400).send(err)
    }
}

async function deleteUser (req,res){
    try{
        const user= await User.findByIdAndDelete(req.params.id);
        res.send("deleted")
    } catch(err){
    res.status(400).send(err)
    }
    //console.log("error")
}

module.exports = {add,showuser,showbyId, showusername, update,deleteUser}