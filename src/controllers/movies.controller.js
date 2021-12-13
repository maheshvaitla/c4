const express = require("express");

const Movies = require("../models/movies.model");

const upload = require("../midllewares/upload");

const router = express.Router();


router.post("/", upload.single("poster_url"), async(req,res)=>{
    try{
        const movies = await Movies.create({
            name:req.body.name,
            actor:req.body.actor,
            languages:req.body.languages,
            director:req.body.director,
            poster_url:req.file.path,
        });
    
        return res.status(201).json({movies})
    
    } catch(e){
    
        return res.status(500).json({ status :"failed", message : e.message})
    }
});


router.get("/:id", async(req,res)=>{
    try {
        const movies= await Movies.findById(req.params.id).lean().exec();
    
        return res.send(movies);
      } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
      }

})
module.exports = router;