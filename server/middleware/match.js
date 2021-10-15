const axios = require('axios');
module.exports = async function (req, res, next) {
    const puuid = req.body.puuid;
    await axios.get(`https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=1&count=20&api_key=RGAPI-202a503c-9a91-4e42-a6a7-9c54855a49b3`)
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