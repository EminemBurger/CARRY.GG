const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
module.exports = async function (req, res, next) {
    const puuid = req.body.puuid;
    await axios.get(`https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=1&count=20&api_key=${process.env.API_KEY}`)
    .then(function (response) {
        let matches = response.data;
        req.matches = matches;
        next();
    })
    .catch(function (error) {
        console.log({ msg: error.msg });
        return res.status(500).json({ msg: "해당 이름을 가진 소환사는 존재하지 않습니다." });
    });
}