const Challenge = require('../models/Challenge');
const Submission = require('../models/Submission');
const SkillMatch = require('../models/SkillMatch');

// Get all challenges
exports.getChallenges = async (req, res) => {
  try {
    const challenges = await Challenge.find().populate('company', 'name');
    res.json(challenges);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Submit answer to a challenge
exports.submitAnswer = async (req, res) => {
  const { challengeId, answer } = req.body;
  try {
    const challenge = await Challenge.findById(challengeId);
    if (!challenge) return res.status(404).json({ message: 'Challenge not found' });

    const submission = new Submission({
      challenge: challengeId,
      candidate: req.user.userId,
      answer,
    });
    await submission.save();
    res.status(201).json(submission);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get skill matches
exports.getSkillMatches = async (req, res) => {
  try {
    const matches = await SkillMatch.find({ candidate: req.user.id })
      .populate('challenge')
      .populate('challenge.company', 'name');
    res.json(matches);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};