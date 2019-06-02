const express = require("express");
let router = express.Router();
let cars = require("../models/carInformationModel");

router.post("/add", (req, res)=>{
    cars.create(req, res);
})

router.get("/get", (req, res)=>{
    cars.getAll(req, res);
})

module.exports = router;