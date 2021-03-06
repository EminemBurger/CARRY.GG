const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
module.exports = function (req, res, next) {
    const encrypted_id = req.body.encrypted_id;
    axios.get(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${encrypted_id}?api_key=${process.env.API_KEY}`)
    .then(function (response) {
        req.tier = response.data[0].tier;
        req.rank = response.data[0].rank;
        req.league_point = response.data[0].leaguePoints;
        req.wins = response.data[0].wins;
        req.losses = response.data[0].losses;
        req.leagueId = response.data[0].leagueId;
        next();
    })
    .catch(function (error) {
        console.log({ msg: error.msg });
        return res.status(500).json({ msg: "해당 이름을 가진 소환사는 존재하지 않습니다." });
    });
}