import express from 'express';
import { addBooks, listAllBooks, getBooksByGenre, deleteBooks } from '../Controller/book.controller.js'


let BookRoutes = express.Router();

BookRoutes.post("/addbooks", addBooks);

BookRoutes.get("/getallbooks", listAllBooks);
BookRoutes.get("/getallbooksbygenre/:genre", getBooksByGenre);
BookRoutes.delete("/deletebook/:Id", deleteBooks);



export default BookRoutes



