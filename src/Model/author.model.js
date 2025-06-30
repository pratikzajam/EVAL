import mongoose from 'mongoose';
const { Schema } = mongoose;

const authorSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    Country: {
        type: String,
        required: true
    },
    birthyear: {
        type: Number,
        required: true
    },

}, { timestamps: true });

const author = mongoose.model('author', authorSchema);


export default author