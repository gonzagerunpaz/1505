const express = require('express')
const route = express.Router()
const demoController = require('../controllers/demo.controller')
route.get("/", demoController.getAll)
route.get("/:id", demoController.getById)
route.delete("/:id", demoController.deleteById)
route.put("/:dni", (req, res)=>{
    
    res.status(200).json({message:`hola ${req.params.dni}`})
})
route.post("/", demoController.add)
/*
route.delete()
*/
module.exports = route
