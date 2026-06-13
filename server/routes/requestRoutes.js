const express = require("express");
const router = express.Router();

const {
  createRequest,
  getAllRequests,
  getRequestById,
  acceptRequest,
} = require("../controllers/requestController");

// Create Request
router.post("/", createRequest);

// Get All Requests
router.get("/", getAllRequests);

// Get Request By ID
router.get("/:id", getRequestById);

// Accept Request
router.put("/:id/accept", acceptRequest);

module.exports = router;