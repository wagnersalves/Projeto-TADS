const router = require("express").Router()

//Noites router
const noitesRouter = require("./noites")

router.use("/noites", noitesRouter) 

//Pacientes router
const pacientesRouter = require("./pacientes")

router.use("/pacientes", pacientesRouter)

module.exports = router 