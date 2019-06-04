const router = require("express").Router();
const intersectionRoutes = require("./intersections");

// Intersection routes
router.use("/intersections", intersectionRoutes);




module.exports = router;
