const express = require('express');
const router = express.Router();
const axios = require('axios');

/*
router.get('/', async(req, res) => {

await axios.get('https://ddragon.leagueoflegends.com/cdn/11.12.1/data/en_US/champion.json')
.then(function(response) {
    const champion_name = 'Aatrox';
    const champions = response.data.data[champion_name];
    res.json(champions);
})
.catch(function(error) {
    console.log({msg : error.msg});
    return res.status(500).json({msg: "Server Error..."});
});


});
*/

router.get('/', async(req, res) => {
    await axios.get('https://ddragon.leagueoflegends.com/cdn/11.12.1/data/ko_KR/champion.json')
    .then(function(response) {
        const champions = response.data.data;
        res.json(champions);
    })
    .catch(function(error) {
        console.log({msg : error.msg});
        return res.status(500).json({msg: "Server Error..."});
    });
    
    
});

router.post('/', async (req, res) => {


    await axios.get('https://ddragon.leagueoflegends.com/cdn/11.12.1/data/ko_KR/champion.json')
        .then(function (response) {
            const champion_name = req.body.name;
            const champions = response.data.data[champion_name];
            res.json(champions);
        })
        .catch(function (error) {
            console.log({ msg: error.msg });
            return res.status(500).json({ msg: "Server Error..." });
        });

});



module.exports = router;