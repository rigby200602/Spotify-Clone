import mongoose from "mongoose";

// create album schema
const albumSchema = new mongoose({
    name: { type: String, require: true },
    desc: { type: String, require: true },
    bgColor: { type: String, require: true },
    image: { type: String, require: true }
})

const albumModel = new mongoose.model.album || mongoose.model("album", albumSchema)

export default albumModel