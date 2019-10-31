const router = require("express").Router();
const dayController = require("../../controllers/dayController");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");

router.route("/:id")
    .get(dayController.getExercises)
    .post(dayController.createExercise)

router.route("/")
    .put(dayController.updateExercise)

module.exports=router;