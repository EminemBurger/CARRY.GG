import { MenuButton } from "../menu.js";
import Champions from "../view/Champions.js";
    

export default async function (params) {
	
  const divElement = document.createElement("div");
	const view = new Champions(params);

  divElement.innerHTML = await view.getHtml();

  function SectionDiv() {
    const section_div = document.createElement("section");
    section_div.classList.add("champion-section");
    return section_div;
  }

  function Container_append(obj) {
    const container = document.querySelector(".container");
    container.appendChild(obj);
  }

  function MakeCard() {
    const Card = document.createElement("div");
    Card.classList.add("champion-card");
    return Card;
  }

  function MakeH1(name) {
    const h1_element = document.createElement("h1");
    h1_element.innerHTML = name;
    return h1_element;
  }

  function MakeChampEvent(card, name) {
    card.addEventListener("click", () => {
      window.location.href = "/champion";
      sessionStorage.setItem('name', name);
    });
  }

  function DisplayCards(data) {
    
    const champion_name = Object.keys(data);
    var i = 0;
    
    while (i < champion_name.length) {
      
      const Section = SectionDiv();

      for (var j = 0; j < 4; j++, i++) {
        if (champion_name.length <= i)
          break;
        const Card = MakeCard();
        Card.style.backgroundImage = `url('http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion_name[i]}_0.jpg')`;
        
        const h1_element = MakeH1(data[champion_name[i]].name);
        Card.appendChild(h1_element);
        MakeChampEvent(Card, champion_name[i]);
        Section.append(Card);
        Container_append(Section);
      }
    }
  }



  fetch('http://localhost:4000/champion', {
      method: 'GET'
  })
    .then(response => response.json())
    .then(function(data) {
      DisplayCards(data);
    })
    .catch(error =>  console.log(error)); 
  /* champion asset */
  

  MenuButton();
  return divElement;
};