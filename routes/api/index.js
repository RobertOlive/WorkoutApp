const router = require("express").Router();
const planRoutes = require("./plans");

// Book routes
router.use("/plans", planRoutes);

module.exports = router;
