const express = require("express");
const router = express.Router();

const {
  getUserProfile,
  updateUserProfile,
} = require("../controllers/userController");

// Get User Profile
router.get("/:id", getUserProfile);

// Update User Profile
router.put("/:id", updateUserProfile);

module.exports = router;