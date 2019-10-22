const router = require("express").Router();
const plansController = require("../../controllers/plansController");

// Matches with "/api/books"
router.route("/")
  .get(plansController.doAThing)
//   .post(booksController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
