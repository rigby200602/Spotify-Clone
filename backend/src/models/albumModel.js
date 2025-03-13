import mongoose from "mongoose";

// create album schema
const albumSchema = new mongoose({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    bgColor: { type: String, required: true },
    image: { type: String, required: true }
})

const albumModel = new mongoose.model.album || mongoose.model("album", albumSchema)

export default albumModel