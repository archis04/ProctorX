const Question = require("../models/Question");

// Add Question (Admin)
exports.addQuestion = async (req, res) => {
  try {
    const question = await Question.create(req.body);
    res.status(201).json(question);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Questions by Exam
exports.getQuestionsByExam = async (req, res) => {
  try {
    const questions = await Question.find({
      examId: req.params.examId
    }).select("-correctAnswer"); // hide answers from students

    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};