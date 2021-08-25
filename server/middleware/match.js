const axios = require('axios');
module.exports = async function (req, res, next) {
    const encrypted_id = req.body.encrypted_id;
    await axios.get(`https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/${encrypted_id}?api_key=RGAPI-9f27324a-231a-49f0-aeff-f609a8f4e6d3`)
    .then(function (response) {
        let matches = response.data.matches;
        matches.forEach((item) => {
            delete item.season;
            delete item.lane;
            delete item.role;
            delete item.platformId;
        });
        req.matches = matches;
        next();
    })
    .catch(function (error) {
        console.log({ msg: error.msg });
        return res.status(500).json({ msg: "해당 이름을 가진 소환사는 존재하지 않습니다." });
    });
}