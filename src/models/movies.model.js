const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name:{type:String,required:true},
    actor:[{type:String,required:true}],
    languages:[{type:String,required:true}],
    director:[{type:String,required:true}],
    poster_url:[{type:String,required:true}]
})

module.exports = mongoose.model("movie", movieSchema);