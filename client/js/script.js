



// section 1의 타이틀 fade in 애니메이션


const img = document.querySelectorAll('.section-2-content-img');
const header = document.querySelectorAll('.section-3-header h1');
const header_p = document.querySelectorAll('.section-3-header p');
const redbox = document.querySelectorAll('.section-3-redbox');

const elementInView = (el, dividend = 1) => {
	const elementTop = el.getBoundingClientRect().top;
  
	return (
	  elementTop <=
	  (window.innerHeight || document.documentElement.clientHeight) / dividend
	);
  };
  
  const elementOutofView = (el) => {
	const elementTop = el.getBoundingClientRect().top;
  
	return (
	  elementTop > (window.innerHeight || document.documentElement.clientHeight)
	);
  };
  
  const displayScrollElement = (element) => {
	element.classList.add("scrolled");
  };
  
  const hideScrollElement = (element) => {
	element.classList.remove("scrolled");
  };
  
  const handleScrollAnimation = (element) => {
	element.forEach((el) => {
	  if (elementInView(el, 1.25)) {
		displayScrollElement(el);
	  } else if (elementOutofView(el)) {
		hideScrollElement(el)
	  }
	})
  }
  
  window.addEventListener("scroll", () => { 
	handleScrollAnimation(img);
	handleScrollAnimation(header);
	handleScrollAnimation(header_p);
	handleScrollAnimation(redbox);
  });

// section 1의 타이틀 fade in 애니메이션 끝



// section 1의 배경화면 별 반짝임 애니메이션


	// let sky = document.querySelector(".section-1-img");
	// let sky_style = getComputedStyle(sky);


    // var iterator = 0;
    

    // while (iterator <= 100){

    //     var xposition = Math.random();
    //     var yposition = Math.random();
    //     var star_type = Math.floor((Math.random() * 3) + 1);
    //     var position = {
    //         "x" : parseInt(sky_style.width) * xposition,
    //         "y" : parseInt(sky_style.height) * yposition,
    //     };

	

	// 	var star = document.createElement('DIV');


	// 	star.classList.add("star");
	// 	star.classList.add("star-type" + star_type);

	// 	star.style.top = position.y + 'px';
	// 	star.style.left = position.x + 'px';

	// 	sky.appendChild(star);

    //     iterator++;
    // }
    
// section 1의 배경화면 별 반짝임 애니메이션
