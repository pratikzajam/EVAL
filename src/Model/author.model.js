import mongoose from 'mongoose';
import book from './book.model';
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
    books: {
        type: [Schema.Types.ObjectId],
        ref: 'book'
    }

}, { timestamps: true });

const author = mongoose.model('author', authorSchema);


export default author