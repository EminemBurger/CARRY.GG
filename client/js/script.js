



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



// 소환사 전적 검색 시
const sum_input = document.querySelector('.section-1-input input');
const sum_btn = document.querySelector('.section-1-input a');
sum_btn.addEventListener("click", () => {
	sessionStorage.setItem("summoner", sum_input.value);
})



// 소환사 전적 검색 시


// 전적 검색시 Enter 인식
sum_input.addEventListener('keyup', function(e) {
	if (e.keyCode === 13) {
		sessionStorage.setItem("summoner", sum_input.value);
		window.location.href = "summoner.html";
	}
});

//