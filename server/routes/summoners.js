const express = require('express');
const router = express.Router();
const axios = require('axios');
const summoner = require('../middleware/summoner');  


router.get('/', summoner, async (req, res) => {
    console.log(req.id);
    res.json(req.id);
});


module.exports = router;