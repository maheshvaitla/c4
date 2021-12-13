const express = require("express");

const User = require("../models/user.model");

const upload = require("../midllewares/upload");

const router = express.Router();


router.post("/", upload.single("profile_pic"), async(req,res)=>{
    try{
        const user = await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            profile_pic:req.file.path,
            roles:req.body.roles
        });
    
        return res.status(201).json({user})
    
    } catch(e){
    
        return res.status(500).json({ status :"failed", message : e.message})
    }
});

module.exports = router;