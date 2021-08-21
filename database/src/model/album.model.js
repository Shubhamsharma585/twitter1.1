const mongoose = require("mongoose")


const albumSchema = mongoose.Schema({
    album_name: {type: String, required: true},
    album_genre: {type: String, required: true},
    album_year: {type: Number, required: true},
    total_songs: {type: String, required: true},
    all_songs: [{type: String }],
    cover_photo: {type: String },
    artist: { type: mongoose.Schema.Types.ObjectId, ref:"users", required: true}
},{
    timestamps: true 
}) 

module.exports = mongoose.model("albums", albumSchema)

