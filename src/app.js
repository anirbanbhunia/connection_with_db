import express from "express"

const app = express()

app.get("/",(req,res) =>{
    res.send("hello AnirbanBhunia")
})

app.get("/instagram",(req,res) => {
    res.send("<h1>visit instagram</h1>")
})

export default app