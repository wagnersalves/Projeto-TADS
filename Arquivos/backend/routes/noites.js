const router = require("express").Router()

const noiteController = require("../controllers/noiteController")

//Para criação de dados no BD
router
.route("/:pacienteid/pacientes")
.post((req, res) => noiteController.create(req, res))

router
.route("/")
.get((req, res) => noiteController.getAll(req, res))

router
.route("/:id")
.get((req, res) => noiteController.get(req, res))

router
.route("/:id")
.delete((req, res) => noiteController.delete(req, res))

router
.route("/:id")
.put((req, res) => noiteController.update(req, res))

module.exports = router;