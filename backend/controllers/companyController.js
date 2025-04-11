const Challenge = require('../models/Challenge');
const SkillMatch = require('../models/SkillMatch');

// Post a new challenge
exports.postChallenge = async (req, res) => {
  const { title, description, skills } = req.body;
  try {
    const challenge = new Challenge({
      title,
      description,
      skills,
      company: req.user.id,
    });
    await challenge.save();
    res.status(201).json(challenge);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get matched candidates for company's challenges
exports.getMatchedCandidates = async (req, res) => {
  try {
    const challenges = await Challenge.find({ company: req.user.id });
    const challengeIds = challenges.map((c) => c._id);
    const matches = await SkillMatch.find({ challenge: { $in: challengeIds } })
      .populate('candidate', 'name email')
      .populate('challenge', 'title');
    res.json(matches);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};