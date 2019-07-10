const router = require("express").Router();
const ticketRoutes = require("./tickets");
const userRoutes = require("./user")

// Ticket routes
router.use("/tickets", ticketRoutes);
router.use("/user", userRoutes);

module.exports = router;
