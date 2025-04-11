const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  postChallenge,
  getMatchedCandidates,
} = require('../controllers/companyController');

// Protected routes for companies
router.post('/challenges', auth('company'), postChallenge);
router.get('/matched-candidates', auth('company'), getMatchedCandidates);

module.exports = router;