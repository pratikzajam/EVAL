import mongoose from 'mongoose';



let connectDb = async () => {

    try {

        mongoose.connect("mongodb+srv://zajampratik:W4ciRVm6dEidx1IB@cluster0.4hcrmch.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

        console.log("Db Connected Sucessfully")
    } catch (error) {
        console.log(error.messages)

    }

}


export default connectDb

