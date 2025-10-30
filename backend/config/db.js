require("dotenv").config()

const mongoose = require("mongoose")
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

// Connection with database

const conn = async () => {
    try {
        const dbConn = await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@reactgram.hsh0bgl.mongodb.net/?retryWrites=true&w=majority&appName=ReactGram`)
        console.log('conectou ao banco')
    } catch (error) {

    console.log(error)
    }
}

conn()


module.exports = conn

