import mongoose from 'mongoose';
import author from '../Model/author.model.js';
const { Schema } = mongoose;

const bookSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    publishedYear: {
        type: Number,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'author'
    }

}, { timestamps: true });

const book = mongoose.model('book', bookSchema);


export default book