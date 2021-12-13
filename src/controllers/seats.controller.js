const express = require("express");

const Seat = require("../models/seats.model");

const router = express.Router();

router.get("/", async(req,res)=>{
    try {
        const seats = await Seat.find().lean().exec();
    
        return res.send(seats);
      } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
      }
})


router.post("/", async (req, res) => {
    try {
      const seats = await Seat.create(req.body);
  
      return res.status(201).send(seats);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
module.exports = router;