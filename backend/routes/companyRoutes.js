const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const {
  postChallenge,
  getMatchedCandidates,
} = require('../controllers/companyController');

// Protected routes for companies
router.post('/challenges', auth, postChallenge);
router.get('/matched-candidates', auth, getMatchedCandidates);

module.exports = router;