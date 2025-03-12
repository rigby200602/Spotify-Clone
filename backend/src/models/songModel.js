import mongoose from "mongoose";
// create songSchema
const songSchema = new mongoose.Schema({
    name: { type: String, require: true },
    desc: { type: String, require: true },
    album: { type: String, require: true },
    image: { type: String, require: true },
    file: { type: String, require: true },
    duration: { type: String, require: true }
})

const songModel = mongoose.model.song || mongoose.model("song", songSchema);

export default songModel