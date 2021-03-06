import { MenuButton } from "../menu.js";
import Champion from "../view/Champion.js";

export default async function (params) {

	const divElement = document.createElement("div");
	const view = new Champion(params);

	divElement.innerHTML = await view.getHtml();

    function ChampionsStat(data) {

        const object_value = Object.values(data.info);
    

        const svg = d3.selectAll(".section-1-champion-stat-svg");


        const dom_svg = getComputedStyle(divElement.getElementsByClassName('section-1-champion-stat-svg')[0]);
        const svg_x = dom_svg.width;
    
    


        const rect = svg.selectAll('rect');



        var xx = d3.scalePoint()
        .domain(['공격', '방어', '마법', '어려움'])        
        .range([ (parseInt(svg_x) / 8),  (parseInt(svg_x) / 8) + (parseInt(svg_x) / 4) * 3]); 

        rect.data(object_value)
            .enter().append("rect")
            .attr("width", 20)
            .attr("fill", "#ff2f2f")
            .attr("height", function(d) {
                return d * 20;
            })
            .attr("x", function(d, i) {
                return    (parseInt(svg_x) / 8) + (parseInt(svg_x) / 4) * i + 'px';
            })
            .attr("y", function(d) {
                return 200 - (d * 20);
            })

        svg.append("g")
        .attr("transform" , "translate(0,200)")
        .attr("color", "white")
        .call(d3.axisBottom(xx));
        
    }
        


    function ChampionRole(data) {
        const champion_stat = Object.values(data.stats);
        divElement.querySelector('#td1').innerHTML = champion_stat[0];
        divElement.querySelector('#td2').innerHTML = champion_stat[1];
        divElement.querySelector('#td3').innerHTML = champion_stat[2];
        divElement.querySelector('#td4').innerHTML = champion_stat[3];
        divElement.querySelector('#td5').innerHTML = champion_stat[5];
        divElement.querySelector('#td6').innerHTML = champion_stat[6];
        divElement.querySelector('#td7').innerHTML = champion_stat[7];
        divElement.querySelector('#td8').innerHTML = champion_stat[8];
        divElement.querySelector('#td9').innerHTML = champion_stat[16];
        divElement.querySelector('#td10').innerHTML = champion_stat[17];
        divElement.querySelector('#td11').innerHTML = champion_stat[19];
        divElement.querySelector('#td12').innerHTML = champion_stat[18];
        divElement.querySelector('#td13').innerHTML = champion_stat[9];
        divElement.querySelector('#td14').innerHTML = champion_stat[4];
    }

    function ChampionAsset(data) {
        const champion = divElement.querySelector('.section-1-content-header img');
        champion.style.background = `url('http://ddragon.leagueoflegends.com/cdn/11.13.1/img/champion/${data.id}.png')`;
        champion.style.backgroundPosition = 'center center';
        champion.style.backgroundSize = 'cover';

        const back_ground = divElement.querySelector('.section-1');
        back_ground.style.background = `linear-gradient(180deg, hsla(0, 1%, 30%, 0.219), #030303, #030303 ,#030303), 
        url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${data.id}_0.jpg') center center no-repeat`;
        back_ground.style.backgroundSize = 'cover';

        const champion_name = divElement.querySelector('.section-1-content-header-banner h1');
        const champion_des = divElement.querySelector('.section-1-content-header-banner p');

        champion_name.innerHTML = data.name;
        champion_des.innerHTML = data.title;

    }

    fetch('http://localhost:4000/champion', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "name": sessionStorage.getItem('name')
        })    
    })
    .then(response => response.json())
    .then(function(data) {
        ChampionsStat(data);
        ChampionRole(data);
        ChampionAsset(data);
    })
    .catch(error =>  console.log(error)); 

    MenuButton();
    return divElement;
}