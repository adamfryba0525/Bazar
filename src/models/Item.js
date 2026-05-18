import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    description: String,
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    },
    price: {
        type: Number,
        required: true
    },
})

export const Item = mongoose.model("Item", itemSchema);