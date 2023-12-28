import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
    title: {
        type: String,
        require: true
    }, // String is shorthand for {type: String}
    author: String,
    body: String
});

export const BlogModel = mongoose.model('Blog', blogSchema);