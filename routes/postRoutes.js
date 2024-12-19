const express = require('express');
const router = express.Router();
const { savePostUrlPair } = require('../controllers/postController');

router.post('/savePostUrlPair', savePostUrlPair);

module.exports = router;