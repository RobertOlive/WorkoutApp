const router = require("express").Router();
const dayController = require("../../controllers/dayController");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");

// Matches with "/api/days"
router.route("/")
  .get(dayController.doAThing)
  // .get(jwtVerify.confirmToken, jwtVerify.verifyToken, dayController.findAll)
//   .post(dayController.create);

// Matches with "/api/days/:id"
router.route("/:id")
  .get(jwtVerify.confirmToken, jwtVerify.verifyToken, dayController.getDays)
  .post(dayController.createDay)
//   .put(dayController.update)
//   .delete(dayController.remove);

module.exports = router;
