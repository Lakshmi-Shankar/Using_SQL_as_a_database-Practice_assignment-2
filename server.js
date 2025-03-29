const express = require("express");
const app = express();
require("dotenv").config();
const { Sequelize } = require("sequelize");

const NAME = process.env.NAME;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const PORT = process.env.PORT;
const HOST = process.env.HOST;

const sequelize = new Sequelize(NAME, USER, PASSWORD,{
    host: HOST,
    dialect: "mysql"
})

const connect = async() => {
    try{
        await sequelize.authenticate();
        console.log("Database connected successfully")
    }
    catch(err){
        console.log(`Error while connecting to database`)
        console.error(err.message)
    }
}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
    connect();
})