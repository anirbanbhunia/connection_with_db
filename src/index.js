//const express = require('express')
// import express from "express"

// const app = express()
import app from './app.js'

const port = 3000

//database connection using mongoose
import mongoose from 'mongoose'
//mongoose.connect('mongodb://127.0.0.1:27017/test')

(async () => {
    //try catch are use to handle mongoose error
    try{
        await mongoose.connect("dbconnection")
        console.log("db connection successfully")

        //this is for listening app error means it's for express
        app.on("error",(err) =>{
            console.error("error is: " ,err)
            throw err
        })

        app.listen(port,() => {
        console.log(`server listening on portno: ${port}`)})

    }catch(err){
        console.error("error is: " ,err)
        throw err
    }
    
})()

// app.listen(port,() => {
//     console.log(`server listening on portno: ${port}`)
// })