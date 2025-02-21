
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 4000
const app = express();


app.use(cors())
app.use(express())




app.get('/', (req, res)=>{
    res.send('Task Management Server Running')
})

app.listen(port, ()=>{
    console.log(`server Running At : ${port}`)
})