const express = require("express");
const router = express.Router();

const {
  createRequest,
  getAllRequests,
  getRequestById,
} = require("../controllers/requestController");

// Create Request
router.post("/", createRequest);

// Get All Requests
router.get("/", getAllRequests);

// Get Request By ID
router.get("/:id", getRequestById);

module.exports = router;