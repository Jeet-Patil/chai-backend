// require('dotenv').config({path: '.env'})
import dotenv from "dotenv"
dotenv.config({
    path: '.env'
})

import connectDB from "./db/index.js"
import { app } from "./app.js";

const PORT = process.env.PORT || 8000;
console.log(process.env.PORT)

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(` Server is running at port : ${PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!!", err);
})









//  In package.json
// "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"

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