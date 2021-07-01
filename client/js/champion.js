function ChampionsStat(data) {

    const object_value = Object.values(data.info);
   

    const svg = d3.selectAll(".section-1-champion-stat-svg");


    const dom_svg = getComputedStyle(document.getElementsByClassName('section-1-champion-stat-svg')[0]);
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

    document.getElementById('td1').innerHTML = champion_stat[0];
    document.getElementById('td2').innerHTML = champion_stat[1];
    document.getElementById('td3').innerHTML = champion_stat[2];
    document.getElementById('td4').innerHTML = champion_stat[3];
    document.getElementById('td5').innerHTML = champion_stat[5];
    document.getElementById('td6').innerHTML = champion_stat[6];
    document.getElementById('td7').innerHTML = champion_stat[7];
    document.getElementById('td8').innerHTML = champion_stat[8];
    document.getElementById('td9').innerHTML = champion_stat[16];
    document.getElementById('td10').innerHTML = champion_stat[17];
    document.getElementById('td11').innerHTML = champion_stat[19];
    document.getElementById('td12').innerHTML = champion_stat[18];
    document.getElementById('td13').innerHTML = champion_stat[9];
    document.getElementById('td14').innerHTML = champion_stat[4];
}

function ChampionAsset(data) {
    const champion = document.querySelector('.section-1-content-header img');
    champion.style.background = `url('http://ddragon.leagueoflegends.com/cdn/11.13.1/img/champion/${data.id}.png')`;

    const back_ground = document.querySelector('.section-1');
    back_ground.style.background = `linear-gradient(180deg, hsla(0, 1%, 30%, 0.219), #030303, #030303 ,#030303), 
    url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${data.id}_0.jpg') center center no-repeat`;
    back_ground.style.backgroundSize = 'cover';

}


fetch('http://carrygg-env-1.eba-e26mm6jp.ap-northeast-2.elasticbeanstalk.com:80/champion', {
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



