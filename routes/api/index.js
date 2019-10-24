const router = require("express").Router();
const dayRoutes = require("./days");

// Book routes
router.use("/days", dayRoutes);

module.exports = router;
