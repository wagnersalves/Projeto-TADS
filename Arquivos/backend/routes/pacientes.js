const router = require("express").Router()

const pacienteController = require("../controllers/pacienteController")

router
.route("/")
.post((req, res) => pacienteController.create(req, res))

router
.route("/")
.get((req, res) => pacienteController.getAll(req, res))

router
.route("/:id")
.get((req, res) => pacienteController.get(req, res))

router
.route("/:id")
.delete((req, res) => pacienteController.delete(req, res))

router
.route("/:id")
.put((req, res) => pacienteController.update(req, res))

module.exports = router;