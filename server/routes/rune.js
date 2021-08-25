const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async(req, res) => {
    await axios.get('https://ddragon.leagueoflegends.com/cdn/10.6.1/data/ko_KR/runesReforged.json')
    .then(function(response) {
        const runes = response.data;
        const runes_map = {};
        runes.forEach((item) => {
            runes_map[item.id] = item.icon;
            item.slots.forEach((slot) => {
                slot.runes.forEach((rune) => {
                    runes_map[rune.id] = rune.icon;
                })
            });
        });
        res.json(runes_map);
    })
    .catch(function(error) {
        console.log({msg : error.msg});
        return res.status(500).json({msg: "Server Error..."});
    });
    
    
});

module.exports = router;