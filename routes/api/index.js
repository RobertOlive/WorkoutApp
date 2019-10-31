const router = require("express").Router();
const dayRoutes = require("./days");
const dateRoutes = require("./date");
const exerciseRoutes = require("./exercise");

// Book routes
router.use("/days", dayRoutes);
router.use("/dates", dateRoutes);
router.use("/exercises", exerciseRoutes);

module.exports = router;
