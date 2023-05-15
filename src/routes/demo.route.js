const express = require('express')
const route = express.Router()
const demoController = require('../controllers/demo.controller')
route.get("/", demoController.getAll)
route.get("/:id", demoController.getById)
route.delete("/:id", demoController.deleteById)
/*
route.post()
route.delete()
*/
module.exports = route
