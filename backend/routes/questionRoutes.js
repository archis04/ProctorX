const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");
const {
  addQuestion,
  getQuestionsByExam
} = require("../controllers/questionController");

router.post("/", protect, adminOnly, addQuestion);
router.get("/:examId", protect, getQuestionsByExam);

module.exports = router;