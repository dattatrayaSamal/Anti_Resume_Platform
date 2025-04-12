const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  postChallenge,
  getMatchedCandidates,
} = require('../controllers/companyController');

// Protected routes for companies
router.post('/challenges', auth('employer'), postChallenge);
router.get('/matched-candidates', auth('employer'), getMatchedCandidates);

module.exports = router;