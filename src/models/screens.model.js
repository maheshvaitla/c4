const mongoose = require("mongoose");

const screenSchema = new mongoose.Schema({
    name:{type:String,required:true},
    theatre_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"theatre",
        required:true
    }
})

module.exports = mongoose.model("screen", screenSchema);