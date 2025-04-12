const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const {getChallenges,submitAnswer,getSkillMatches} = require('../controllers/candidateController');

// Protected routes for candidates
router.get('/challenges', auth, getChallenges);
router.post('/submit-answer', auth, submitAnswer);
router.get('/skill-matches', auth, getSkillMatches);

module.exports = router;