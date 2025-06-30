import express from 'express';
import { addAuthor, getAllAuthors } from '../Controller/author.controller.js'


let Routes = express.Router();

Routes.post("/addauthor", addAuthor);
Routes.get("/getallauthors", getAllAuthors);


export default Routes



