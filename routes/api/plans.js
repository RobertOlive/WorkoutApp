const router = require("express").Router();
const plansController = require("../../controllers/plansController");
const jwt = require("jsonwebtoken");
const jwtVerify = require("../../config/jwt");

// Matches with "/api/books"
router.route("/")
  .get(plansController.doAThing)
  // .get(jwtVerify.confirmToken, jwtVerify.verifyToken, plansController.findAll)
//   .post(booksController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
