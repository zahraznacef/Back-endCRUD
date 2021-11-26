const USER = require("../models/useModel")




module.exports = {
    addUser : async (req,res) =>{
        try{
            const nom = req.body.nom;
            const prenom = req.body.prenom;
            const telephone = req.body.telephone;
            const email = req.body.email;
            const password = req.body.password;
            const user = await new USER({ 
                nom,prenom,
                telephone,
                email,
                password
            })
            await user.save()
            res.json(user)
        }
        catch (err){
            console.log(err)
        }
    },

    getAllUsers : async (req,res) =>{
        try{
            const user = await USER.find();
            res.json(user)
        }
        catch (err){
            console.log(err)
        }
    },

    deleteUser : async (req,res) =>{
        try{
            const user = await USER.findByIdAndDelete(req.params.id)
            res.json(user)
        }
        catch (err){
            console.log(err)
        }
    },

    updateUser : async (req,res) =>{
        try{
            const user = await USER.findByIdAndUpdate(req,params,id,req.body,{new:true});
            res.json(user)
        }
        catch (err){
            console.log(err)
        }
    },

    getOneUser : async (req,res) =>{
        try{
            const user = await USER.findById(req.params.id);
            res.json(user);
        }
        catch (err){
            console.log(err)
        }
    }
}