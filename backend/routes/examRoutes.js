const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");
const {
  createExam,
  getExams,
  getExamById
} = require("../controllers/examController");

router.post("/", protect, adminOnly, createExam);
router.get("/", protect, getExams);
router.get("/:id", protect, getExamById);

module.exports = router;