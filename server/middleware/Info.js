const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
module.exports = function (req, res, next) {
    const match_id = req.body.match_id;
    const summoner_name = req.body.summoner;
    axios.get(`https://asia.api.riotgames.com/lol/match/v5/matches/${match_id}?api_key=${process.env.API_KEY}`)
    .then(function (response) {
        const summoner = response.data.info.participants.find(participant => participant.summonerName === summoner_name);
        const team_summoners1 = [];
        const team_summoners2 = [];
        response.data.info.participants.forEach((item) => {
            const summoner_name = item.summonerName;
            const team_id = item.teamId;
            const champion_id = item.championId;
            const team_member = {
                name: summoner_name,
                championId: champion_id,
            };
            if (team_id === 100) {
                team_summoners1.push(team_member);
            }
            if (team_id === 200) {
                team_summoners2.push(team_member);
            }
        })
        req.team1 = team_summoners1;
        req.team2 = team_summoners2;
        req.participants_info = summoner;
        req.gameDuration = response.data.info.gameDuration;
        req.queueId = response.data.info.queueId;
        req.time = response.data.info.gameStartTimestamp;
        next();
    })
    .catch(function (error) {
        console.log({ msg: error.msg });
        return res.status(500).json({ msg: "해당 이름을 가진 소환사는 존재하지 않습니다." });
    });
}