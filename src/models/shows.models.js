const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
    timing:{type:Number,required:true},
    movie_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"movie",
        required:true
    },
    total_seats:{type:Number,required:true},
    screens_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"screen",
        required:true
    }
})

module.exports = mongoose.model("show", showSchema);