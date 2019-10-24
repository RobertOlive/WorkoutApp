const router = require("express").Router();
const dayController = require("../../controllers/dayController");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");

// Matches with "/api/days"
// router.route("/")
//   .get(dayController.doAThing)

// Matches with "/api/days/:id"
router.route("/:id")
  // .get(jwtVerify.confirmToken, jwtVerify.verifyToken, dayController.getDays)
  .get(dayController.getDays)
  // .post(jwtVerify.confirmToken, jwtVerify.verifyToken, dayController.createDay)
  .post(dayController.createDay)

module.exports = router;
