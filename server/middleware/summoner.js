const axios = require('axios');


module.exports = async function (req, res, next) {
    await axios.get('https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/%EB%82%98%EB%8A%94%EC%A6%90%EA%B2%9C%EC%9C%A0%EC%A0%80%EC%97%90%EC%9A%94?api_key=RGAPI-7e8f7fb6-cc5a-48a2-9296-d4d55c8df79d')
        .then(function (response) {
            const summoners_id = response.data.id;
            req.id = summoners_id;
            next();
        })
        .catch(function (error) {
            console.log({ msg: error.msg });
            return res.status(500).json({ msg: "해당 이름을 가진 소환사는 존재하지 않습니다." });
        });
}