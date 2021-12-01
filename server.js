const express = require('express');
const app = express();

app.get("/",(req,res) => {
    return res.send("Yay! its working");
})

const PORT = process.env.PORT || 3000;

app.listen(PORT,console.log(`App started at port:`,PORT))