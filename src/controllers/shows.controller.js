const express = require("express");

const Show = require("../models/shows.models");

const router = express.Router();

router.get("/:id", async(req,res)=>{
    try {
        const shows= await Show.findById(req.params.id).lean().exec();
    
        return res.send(shows);
      } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
      }

})

router.post("/", async (req, res) => {
    try {
      const shows = await Show.create(req.body);
  
      return res.status(201).send(comment);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
module.exports = router;