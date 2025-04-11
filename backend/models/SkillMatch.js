const mongoose = require('mongoose');

const skillMatchSchema = new mongoose.Schema({
  candidate: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  challenge: { type: mongoose.Schema.Types.ObjectId, ref: 'Challenge', required: true },
  matchedSkills: [{ type: String }],
  matchScore: { type: Number, default: 0 }, // e.g., percentage match
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('SkillMatch', skillMatchSchema);