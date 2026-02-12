const Exam = require("../models/Exam");

// Create Exam (Admin)
exports.createExam = async (req, res) => {
  try {
    const exam = await Exam.create({
      ...req.body,
      createdBy: req.user.id
    });
    res.status(201).json(exam);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get All Exams (Student/Admin)
exports.getExams = async (req, res) => {
  try {
    const exams = await Exam.find().select("-__v");
    res.json(exams);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Single Exam
exports.getExamById = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    if (!exam)
      return res.status(404).json({ message: "Exam not found" });

    res.json(exam);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};