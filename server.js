const bodyParser = require("body-parser");
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4200;
const carRoutes = require("./routes/carInformartionRoutes");


app.use(bodyParser.json());
app.use(express.static(__dirname+"/dist/classicCars"))

app.use("/cars", carRoutes);


app.get('/', (req,res)=>{
    res.sendFile(__dirname+"/dist/classicCars/index.html")
})

app.get('/*', (req, res)=>{
    res.redirect('back');
})

app.listen(PORT);