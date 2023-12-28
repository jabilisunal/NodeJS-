import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    title: {
        type: String,
        require: true
    }, // String is shorthand for {type: String}
    author: String,
    body: String
});

export const UserModel = mongoose.model('MUser', userSchema);