import { MenuButton } from "../menu.js";
import Summoner from "../view/Summoner.js";

export default async function (params) {

	const divElement = document.createElement("div");
	const view = new Summoner(params);

	divElement.innerHTML = await view.getHtml();

    var startindex;
    var queue_type = {
        420: "솔로 랭크",
        450: "무작위 총력전",
        0: "사용자 지정 게임",
        440: "자유 랭크 게임",
        430: "일반 게임"
    }
    var spells = {
        21: "SummonerBarrier",
        1: "SummonerBoost",
        14: "SummonerDot",
        3: "SummonerExhaust",
        4: "SummonerFlash",
        6: "SummonerHaste",
        7: "SummonerHeal",
        13: "SummonerMana",
        30: "SummonerPoroRecall",
        31: "SummonerPoroThrow",
        11: "SummonerSmite",
        39: "SummonerSnowURFSnowball_Mark",
        32: "SummonerSnowball",
        12: "SummonerTeleport",
        54: "Summoner_UltBook_Placeholder"
    }
    var runes;


    var summ_name;
    var champion;

    function Unix_timestamp(t){
        var date = new Date(t);
        var year = date.getFullYear();
        var month = "0" + (date.getMonth()+1);
        var day = "0" + date.getDate();
        var hour = "0" + date.getHours();
        var minute = "0" + date.getMinutes();
        //var second = "0" + date.getSeconds();
        return month.substr(-2) + "월" + day.substr(-2) + "일 " + hour.substr(-2) + ":" + minute.substr(-2);
    }

    function SummonerName(data) {
        const summoner_name = document.createElement("p");
        summoner_name.innerHTML = data;

        summ_name = data;

        const summoner_div = divElement.querySelector('.section-1-summoner');
        summoner_div.appendChild(summoner_name);
    }

    function SummonerProfile(data) {
        const profile = divElement.querySelector(".section-1-profile-icon");
        profile.style.background = `url(http://ddragon.leagueoflegends.com/cdn/11.15.1/img/profileicon/${data}.png) center center / cover`;
    }

    function SummonerTier(tier, rank) {
        const tier_div = divElement.querySelector(".section-1-rank-emblem");
        tier_div.style.background = `url(../asset/ranked-emblems/Emblem_${tier}.png) center center / cover`;
        const rank_tier = divElement.querySelector(".section-1-rank-tier");
        rank_tier.innerHTML = tier + " " + rank;
    }

    function SummonerLevel(data) {
        const level = divElement.querySelector(".section-1-summoner-p");
        level.innerHTML = "레벨 " + data;
    }

    function SummonerTierLp(data) {
        const lp = divElement.querySelector(".section-1-lp");
        lp.innerHTML = data + " LP";
    }


    function MakeMatches() {
        const Matches_div = divElement.querySelector('.section-2');
        for (var i = startindex; i < startindex+10; i++) {
            const HtmlStr = `<div class='section-2-match'> \
            <div class='section-2-match-queue'>\
                <p class='section-2-match-queue-gametype gametype--${i}'></p>\
                <p class='section-2-match-queue-gameduration gameduration--${i}'></p> \
                <p class='section-2-match-queue-wins wins--${i}'></p> \
                <p class='section-2-match-queue-time time--${i}'></p>\
            </div> \
            <div class='section-2-champion'> \
                <span class='champion--${i}'></span>
                <p class='champion-name--${i}'></p>
            </div> \
            <div class='section-2-spell'> \
                <span class='spell1--${i}'></span>
                <span class='spell2--${i}'></span>
            </div> \
            <div class='section-2-rune'> \
            <span class='rune1--${i}'></span>
            <span class='rune2--${i}'></span>
            </div> \
            <div class='section-2-kda'> \
                <span class='kda--${i}'></span>
                <span class='score--${i}'></span>
            </div> \
            <div class='section-2-lv-cs'> \
            <span class='lv--${i}'></span>
            <span class='cs--${i}'></span>
            <span class='section-2-lv-cs-multikill multikill--${i}'></span>
            </div> \
            <div class='section-2-items'> \
                <span class='item1--${i}'></span>
                <span class='item2--${i}'></span>
                <span class='item3--${i}'></span>
                <span class='item4--${i}'></span>
                <span class='item5--${i}'></span>
                <span class='item6--${i}'></span>
            </div> \
            <div class='section-2-team1 team1--${i}'>\
                <div class='section-2-team1-member'> \
                    <span class='member-champion'></span>
                    <span class='member-name'></span>
                </div> \
                <div class='section-2-team1-member'> \
                    <span class='member-champion'></span>
                    <span class='member-name'></span>
                </div> \
                <div class='section-2-team1-member'> \
                    <span class='member-champion'></span>
                    <span class='member-name'></span>
                </div> \
                <div class='section-2-team1-member'> \
                    <span class='member-champion'></span>
                    <span class='member-name'></span>
                </div> \
                <div class='section-2-team1-member'> \
                    <span class='member-champion'></span>
                    <span class='member-name'></span>
                </div> \
            </div> \
            <div class='section-2-team2 team2--${i}'>\
            <div class='section-2-team2-member'> \
                <span class='member-champion'></span>
                <span class='member-name'></span>
            </div> \
            <div class='section-2-team2-member'> \
                <span class='member-champion'></span>
                <span class='member-name'></span>
            </div> \
            <div class='section-2-team2-member'> \
                <span class='member-champion'></span>
                <span class='member-name'></span>
            </div> \
            <div class='section-2-team2-member'> \
                <span class='member-champion'></span>
                <span class='member-name'></span>
            </div> \
            <div class='section-2-team2-member'> \
                <span class='member-champion'></span>
                <span class='member-name'></span>
            </div> \
        </div> \
        </div>`
            const match = document.createElement('div');
            match.innerHTML = HtmlStr;
        
            Matches_div.append(match);
        }
        
    }

    function DisplayWins(data, idx) {
        const WinDiv = divElement.querySelector(`.wins--${idx}`);
        if (data) 
            WinDiv.innerHTML = "승리";
        else
            WinDiv.innerHTML = "패배";

    }

    function DisplayGameDuration(data, idx) {
        const GameDurationDiv = divElement.querySelector(`.gameduration--${idx}`);
        const minute = parseInt(data / 60);
        const second = data % 60;
        GameDurationDiv.innerHTML = minute + "분" + second + "초";
    }

    function DisplayChampion(data, idx) {
        const ChampionDiv = divElement.querySelector(`.champion--${idx}`);
        const champion_name = champion.find(item => parseInt(item.key) === data);
        const ChampionNameDiv = divElement.querySelector(`.champion-name--${idx}`);
        ChampionDiv.style.background = `url(http://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/${champion_name.id}.png) center center / cover`;
        ChampionNameDiv.innerHTML =champion_name.name;
    }

    function DisplaySpell(data1, data2, idx) {
        const spell1Div = divElement.querySelector(`.spell1--${idx}`);
        const spell2Div = divElement.querySelector(`.spell2--${idx}`);
        const spell1_name = spells[data1];
        const spell2_name = spells[data2];
        spell1Div.style.background = `url(http://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/${spell1_name}.png) center center / cover`;
        spell2Div.style.background = `url(http://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/${spell2_name}.png) center center / cover`;

    }

    function DisplayRune(data1, data2, idx) {
        const rune1Div = divElement.querySelector(`.rune1--${idx}`);
        const rune2Div = divElement.querySelector(`.rune2--${idx}`);
        const rune1_name = runes[data1];
        const rune2_name = runes[data2];

        rune1Div.style.background = `url(https://ddragon.leagueoflegends.com/cdn/img/${rune1_name}) center center / cover`;
        rune2Div.style.background = `url(https://ddragon.leagueoflegends.com/cdn/img/${rune2_name}) center center / cover`;
    }

    function DisplayKda(kill, death, assist, idx) {
        const kdaDiv = divElement.querySelector(`.kda--${idx}`);
        kdaDiv.innerHTML = kill + "/" + death + "/" + assist;
        const scoreDiv = divElement.querySelector(`.score--${idx}`);
        let score = ((kill + assist) / death).toFixed(2);
        if (kill === 0 && assist === 0)
            score = 0.00;   
        if (death === 0)
            score = "Perfect";
        scoreDiv.innerHTML = score;    
    }

    function DisplayLvCs(level, cs, gameDuration, idx) {
        const levelDiv = divElement.querySelector(`.lv--${idx}`);
        const csDiv = divElement.querySelector(`.cs--${idx}`);
        const minute = parseInt(gameDuration / 60);
        const minuteperCS = (cs / minute).toFixed(2);
        levelDiv.innerHTML = "레벨 " + level;
        csDiv.innerHTML = cs + "("+ minuteperCS +")"+ "CS";
    }

    function DisplayItems(item1, item2, item3, item4, item5, item6, idx) {
        const item1Div = divElement.querySelector(`.item1--${idx}`);
        const item2Div = divElement.querySelector(`.item2--${idx}`);
        const item3Div = divElement.querySelector(`.item3--${idx}`);
        const item4Div = divElement.querySelector(`.item4--${idx}`);
        const item5Div = divElement.querySelector(`.item5--${idx}`);
        const item6Div = divElement.querySelector(`.item6--${idx}`);
    // const item7Div = document.querySelector(`.item7--${idx}`);
        if (item1 != 0)
            item1Div.style.background = `url(http://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/${item1}.png) center center / cover`;
        if (item2 != 0)
            item2Div.style.background = `url(http://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/${item2}.png) center center / cover`;
        if (item3 != 0)
            item3Div.style.background = `url(http://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/${item3}.png) center center / cover`;
        if (item4 != 0)
            item4Div.style.background = `url(http://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/${item4}.png) center center / cover`;
        if (item5 != 0)
            item5Div.style.background = `url(http://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/${item5}.png) center center / cover`;
        if (item6 != 0)
            item6Div.style.background = `url(http://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/${item6}.png) center center / cover`;
    //  item7Div.style.background = `url(http://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/${item7}) center center / cover`;


    }


    function DisplayMultiKill(kills, idx) {
        const MultikillDiv = divElement.querySelector(`.multikill--${idx}`);
            let killname;
            switch (kills) {
                case 5:
                    killname = "펜타킬";
                    MultikillDiv.style.display = "blcok";
                    break;
                case 4:
                    killname = "쿼드라킬";
                    MultikillDiv.style.display = "block";
                    break;
                case 3:
                    killname = "트리플킬";
                    MultikillDiv.style.display = "block";
                    break;
                case 2:
                    killname = "더블킬";
                    MultikillDiv.style.display = "block";
                    break;
                default:
                    killname = "";
                    break;
            }
            MultikillDiv.innerHTML = killname;
        
    }

    function DisplayTeam(team1, team2, idx) {
        const team1Div = divElement.querySelector(`.team1--${idx}`);
        const team2Div = divElement.querySelector(`.team2--${idx}`);

        for (var i = 0; i < 5; i++) {
            const memberDiv = team1Div.children[i];
            const ChampDiv = memberDiv.children[0];
            const NameDiv = memberDiv.children[1];
            const champion_name = champion.find(item => parseInt(item.key) === team1[i].championId);

            ChampDiv.style.background = `url(http://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/${champion_name.id}.png) center center / cover`
            let name = team1[i].name;
            if (name.length > 7) {
                name = name.substring(0, 6) + '..';
            }
            NameDiv.innerHTML = name;    }

        for (var i = 0; i < 5; i++) {
            const memberDiv = team2Div.children[i];
            const ChampDiv = memberDiv.children[0];
            const NameDiv = memberDiv.children[1];
            const champion_name = champion.find(item => parseInt(item.key) === team2[i].championId);

            ChampDiv.style.background = `url(http://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/${champion_name.id}.png) center center / cover`
            let name = team2[i].name;
            if (name.length > 8) {
                name = name.substring(0, 7) + '..';
            }
            NameDiv.innerHTML = name;
        }
    }

    function DisplayGameType(data, idx) {  
        const queueDIv = divElement.querySelector(`.gametype--${idx}`);
        queueDIv.innerHTML = queue_type[data];
    }

    function DisplayTimeStamp(data, idx) {
        const timeDiv = divElement.querySelector(`.time--${idx}`);
        timeDiv.innerHTML = Unix_timestamp(data);
    }

    /*
    function MakeMatchButton() {
        const button = document.createElement('button');
        button.innerHTML = "더보기";
        button.classList.add('.section-2-match-button');
        button.addEventListener('click', function() => {
            MakeMatches
        });

        const container = document.querySelector('.section2');
        container.appendChild(button);
    }*/

    async function GetMatchData(data) {
        const Match = await fetch('http://localhost:4000/summoner/match', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "puuid": data
            })  
        })

        const Match_data = await Match.json();

        MakeMatches(Match_data.summoner_matches);
        for (var i = startindex; i < startindex+10; i++)
            GetGameData(Match_data.summoner_matches[i], i);
    }

    async function GetGameData(data, idx) {
        const Game = await fetch('http://localhost:4000/summoner/info', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "match_id": data,
                "summoner": summ_name
            })  
        })

        const Game_data = await Game.json();


        const about_summoner = Game_data.participants_info;
        DisplayTeam(Game_data.team1, Game_data.team2, idx);
        DisplayItems(about_summoner.item0, about_summoner.item1, about_summoner.item2, about_summoner.item3, about_summoner.item4, about_summoner.item5, idx);
        DisplayMultiKill(about_summoner.largestMultiKill, idx);
        DisplayLvCs(about_summoner.champLevel, about_summoner.totalMinionsKilled , Game_data.gameDuration ,idx);
        DisplayKda(about_summoner.kills, about_summoner.deaths, about_summoner.assists, idx);
        DisplayRune(about_summoner.perks.styles[0].selections[0].perk , about_summoner.perks.styles[1].style , idx);
        DisplaySpell(about_summoner.summoner1Id, about_summoner.summoner2Id, idx);
        DisplayChampion(about_summoner.championId, idx);
        DisplayGameDuration(Game_data.gameDuration, idx);
        DisplayWins(about_summoner.win, idx);
        DisplayGameType(Game_data.queueId, idx);
        DisplayTimeStamp(Game_data.time, idx);
        startindex += 10;
    }

    async function GetSummonerData() {
        const summoner = await fetch('http://localhost:4000/summoner/profile', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "summoner": sessionStorage.getItem("summoner")
            })  
        })

        const data = await summoner.json();

        GetLeagueData(data.summoner_en_id);
        GetMatchData(data.summoner_puuid);
        SummonerName(data.summoner_name);
        SummonerProfile(data.summoner_profile);
        SummonerLevel(data.summoner_level);
    }

    async function GetLeagueData(data) {
        const League = await fetch('http://localhost:4000/summoner/league', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "encrypted_id": data
            })  
        })

        const League_data = await League.json();

        SummonerTier(League_data.summoner_tier, League_data.summoner_rank);
        SummonerTierLp(League_data.summoner_league_point);
    }

    async function GetChampionData() {
        const data = await fetch('http://localhost:4000/champion', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},

        })
        
        champion = await data.json();
        champion = Object.values(champion);
    }

    async function GetRuneData() {
        const data = await fetch('http://localhost:4000/rune', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},

        })
        runes = await data.json();
    }

    startindex = 0;    
    MenuButton();
    GetChampionData();
    GetRuneData();
    GetSummonerData();
    return divElement;
}
