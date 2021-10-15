// swipper effet

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 40,
  initialSlide: 3,
  coverflowEffect: {
    rotate: 33,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});


// swipper effect


/* champion asset */

function ChampionDeploy(data) {

  const dd = Object.keys(data);

  const champions = document.querySelectorAll('.section-1-card');

  for (var i = 0; i < champions.length; i++) {
    (function (i) {
      var j = i;
      champions[j].addEventListener("click", () => {
        window.location.href = "champion.html";
        sessionStorage.setItem('name', dd[j]);
      });
    })(i);

    champions[i].style.backgroundImage = `url('http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${dd[i]}_0.jpg')`;
    champions[i].firstElementChild.firstElementChild.innerHTML = data[dd[i]].name;
  };

};



fetch('http://localhost:4000/champion', {
    method: 'GET'
})
  .then(response => response.json())
  .then(function(data) {
        ChampionDeploy(data);
  })
  .catch(error =>  console.log(error)); 
/* champion asset */

