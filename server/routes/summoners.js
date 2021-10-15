const express = require('express');
const router = express.Router();
const axios = require('axios');
const summoner = require('../middleware/summoner');  
const league = require('../middleware/league')
const match = require('../middleware/match');
const info = require('../middleware/Info');
router.post('/profile', summoner, async (req, res) => {
    const wait = await req;
    const summoner = {
        summoner_name : wait.id,
        summoner_profile : wait.profile,
        summoner_en_id: wait.encrypted_id,
        summoner_level : wait.summonerLevel,
        summoner_ac_id: wait.account_id,
        summoner_puuid : wait.puuid
    }
    res.json(summoner);
});

router.post('/league', league, async (req, res) => {
    const wait = await req;
    const league = {
        summoner_tier : wait.tier,
        summoner_rank : wait.rank,
        summoner_league_point : wait.league_point,
        summoner_wins : wait.wins,
        summoner_losses : wait.losses,
        summoner_leagueId : wait.leagueId,
    }
    res.json(league);
});

router.post('/match', match, async (req, res) => {
    const wait = await req;
    const match = {
        summoner_matches : wait.matches
    }
    res.json(match);
});

router.post('/info', info , async (req, res) => {
    const wait = await req;
    const match = {
        participants_info : wait.participants_info,
        gameDuration : wait.gameDuration,
        team1 : wait.team1,
        team2 : wait.team2,
        queueId : wait.queueId,
        time: wait.time
    }
    res.json(match);
});

module.exports = router;