// require('dotenv').config({path: '.env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path: '.env'
})

const PORT = process.env.PORT || 8000;

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(` Server is running at port : ${PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!!", err);
})





/*
import express from "express"
const app = express()

;( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch(error) {
        console.error("ERROR: ", error)
        throw err
    }
})()
*/