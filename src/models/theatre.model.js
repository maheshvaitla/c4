const mongoose = require("mongoose");

const theatreSchema = new mongoose.Schema({
    theatrename:{type:String,required:true},
    locationarea:{type:String,required:true}
});

module.exports = mongoose.model("theatre", theatreSchema);