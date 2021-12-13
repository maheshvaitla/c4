const express = require("express");

const Theatre = require("../models/theatre.model");



const router = express.Router();

router.post("/", async (req, res) => {
    try {
      const theatres = await Theatre.create(req.body);
  
      return res.status(201).send(theatres);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });

module.exports = router;