const axios = require('axios');
module.exports = async function (req, res, next) {
    const match_id = req.body.match_id;
    const summoner_name = req.body.summoner;
    await axios.get(`https://kr.api.riotgames.com/lol/match/v4/matches/${match_id}?api_key=RGAPI-9f27324a-231a-49f0-aeff-f609a8f4e6d3`)
    .then(function (response) {
        const summoner = response.data.participantIdentities.find(participant => participant.player.summonerName === summoner_name);
        const team_summoners1 = [];
        const team_summoners2 = [];
        response.data.participantIdentities.forEach((item) => {
            const summoner_id = item.participantId;
            const summoner_name = item.player.summonerName;
            const find_summoner =response.data.participants.find(participant => participant.participantId === summoner_id);
            const team_id = find_summoner.teamId;
            const champion_id = find_summoner.championId;
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
        req.participant = summoner;
        req.participants_info = response.data.participants.find(participant => participant.participantId === summoner.participantId);
        req.gameDuration = response.data.gameDuration;
        next();
    })
    .catch(function (error) {
        console.log({ msg: error.msg });
        return res.status(500).json({ msg: "해당 이름을 가진 소환사는 존재하지 않습니다." });
    });
}