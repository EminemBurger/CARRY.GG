const axios = require('axios');
module.exports = async function (req, res, next) {
    const summoner = req.body.summoner;
    await axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeURIComponent(summoner)}?api_key=RGAPI-9f27324a-231a-49f0-aeff-f609a8f4e6d3`)
        .then(function (response) {
            req.id = response.data.name;
            req.profile = response.data.profileIconId;
            req.encrypted_id = response.data.id;
            req.account_id = response.data.accountId;
            req.summonerLevel = response.data.summonerLevel;
            next();
        })
        .catch(function (error) {
            console.log({ msg: error.msg });
            return res.status(500).json({ msg: "해당 이름을 가진 소환사는 존재하지 않습니다." });
        });
}