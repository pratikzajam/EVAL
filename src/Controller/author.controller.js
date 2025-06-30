import book from '../Model/book.model.js'
import author from '../Model/author.model.js'


export let addAuthor = async (req, res) => {
    try {
        const { name, country, birthYear } = req.body || {};


        if (!name || !country || !birthYear) {
            return res.status(200).json({
                status: false,
                messsage: "All Fields Are Required",
                data: null
            })
        }

        let createAuthor = new author({
            name: name,
            Country: country,
            birthyear: birthYear
        })

        console.log("HI")


        try {

            console.log("printed til here")

            await createAuthor.save();

            if (createAuthor._id) {
                return res.status(200).json({
                    status: false,
                    messsage: "Author Created Sucessfully",
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
        return res.status(200).json({
            status: false,
            messsage: error.message,
            data: null
        })
    }

}


export let getAllAuthors = async (req, res) => {
    try {

        let getAllAuthors = await book.find();

        if (getAllAuthors.length == 0) {
            return res.status(200).json({
                status: false,
                messsage: "No Authors Found",
                data: null
            })
        } else {
            return res.status(200).json({
                status: false,
                messsage: "Author Details Featched Sucessfully",
                data: {
                    getAllAuthors: getAllAuthors
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



export let getAllAuthorswithBooks = async (req, res) => {
    try {

        let getAllAuthors = await author.find().populate('');

        if (getAllAuthors.length == 0) {
            return res.status(200).json({
                status: false,
                messsage: "No Authors Found",
                data: null
            })
        } else {
            return res.status(200).json({
                status: false,
                messsage: "Author Details Featched Sucessfully",
                data: {
                    getAllAuthors: getAllAuthors
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










