import book from '../Model/book.model.js';
import author from '../Model/author.model.js';

export let addBooks = async (req, res) => {
    try {
        const { genre, title, publishedYear, author } = req.body;

        console.log("Hi")


        if (!genre || !title || !publishedYear || !author) {
            return res.status(404).json({
                status: false,
                messsage: "All The Fields Are Required",
                data: null
            })
        }


        let addBook = new book({
            genre: genre,
            title: title,
            publishedYear: publishedYear,
            author: author
        })


        try {
            await addBook.save();

            if (addBook._id) {
                return res.status(200).json({
                    status: false,
                    messsage: "Book Added Sucessfully",
                    data: null
                })
            } else {
                return res.status(500).json({
                    status: false,
                    messsage: "Something went wrong",
                    data: null
                })
            }

        } catch (error) {
            return res.status(200).json({
                status: false,
                messsage: error.message,
                data: null
            })
        }













    } catch (error) {

    }


}



export let listAllBooks = async (req, res) => {
    try {

        let getAllBooks = await book.find();

        if (getAllBooks.length == 0) {
            return res.status(200).json({
                status: false,
                messsage: "No Books Found",
                data: null
            })
        } else {
            return res.status(200).json({
                status: false,
                messsage: "Book Details Featched Sucessfully",
                data: {
                    books: getAllBooks
                }
            })
        }


    } catch (error) {
        return res.status(200).json({
            status: false,
            messsage: error.message,
            data: null
        })
    }

}



export let getBooksByGenre = async (req, res) => {
    try {
        const { genre } = req.params

        console.log(genre)

        if (!genre) {
            return res.status(200).json({
                status: false,
                messsage: "genre is required",
                data: null
            })
        }



        let getAllBooks = await book.find({ genre: genre });

        if (getAllBooks.length == 0) {
            return res.status(200).json({
                status: false,
                messsage: "No Books Found",
                data: null
            })
        } else {
            return res.status(200).json({
                status: false,
                messsage: "Book Details Featched Sucessfully",
                data: {
                    books: getAllBooks
                }
            })
        }


    } catch (error) {
        return res.status(200).json({
            status: false,
            messsage: error.message,
            data: null
        })
    }

}



export let deleteBooks = async (req, res) => {
    try {
        const { Id } = req.params;

        if (!Id) {
            return res.status(404).json({
                status: false,
                messsage: "All The Fields Are Required",
                data: null
            })
        }


        let isBookExists = await book.findOne({ _id: Id });

        if (!isBookExists) {
            return res.status(404).json({
                status: false,
                messsage: "Book Does Not Exists",
                data: null
            })
        }


        try {

            let deleteBooks = await book.deleteOne({ _id: Id });

            if (deleteBooks.deletedCount == 1) {
                return res.status(404).json({
                    status: false,
                    messsage: "Book Deleted Sucessfully",
                    data: null
                })
            }


        } catch (error) {
            return res.status(404).json({
                status: false,
                messsage: error.messages,
                data: null
            })
        }


    } catch (error) {
        return res.status(500).json({
            status: false,
            messsage: error.messages,
            data: null
        })
    }


}




