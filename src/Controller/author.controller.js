import user from '../Model/user.model.js'
import author from '../Model/author.model.js'


export let addAuthor = async (req, res) => {
    try {
        const { name, country, birthYear } = req.body;


        if (!name || !country || !birthYear) {
            return res.status(200).json({
                status: false,
                messsage: "All Fields Are Required",
                data: null
            })
        }

        let createAuthor = new author({
            name: name,
            country: country,
            birthYear: birthYear
        })


        try {
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
                messsage: error.messages,
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








