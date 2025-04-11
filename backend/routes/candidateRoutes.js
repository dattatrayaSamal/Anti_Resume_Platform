const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  getChallenges,
  submitAnswer,
  getSkillMatches,
} = require('../controllers/candidateController');

// Protected routes for candidates
router.get('/challenges', auth('candidate'), getChallenges);
router.post('/submit-answer', auth('candidate'), submitAnswer);
router.get('/skill-matches', auth('candidate'), getSkillMatches);

module.exports = router;