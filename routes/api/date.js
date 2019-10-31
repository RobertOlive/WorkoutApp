const router = require("express").Router();
const dayController = require("../../controllers/dayController");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");

router.route("/:id")
    .get(dayController.getDates)
    .post(dayController.createDate)

module.exports=router;