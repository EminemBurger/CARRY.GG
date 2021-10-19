import { MenuButton } from "../menu.js";
import Home from "../view/Main.js";

export default async function (params) {

	// section 1의 타이틀 fade in 애니메이션

	const divElement = document.createElement("div");
	const view = new Home(params);

	divElement.innerHTML = await view.getHtml();
	
	const img = divElement.querySelectorAll('.section-2-content-img');
	const header = divElement.querySelectorAll('.section-3-header h1');
	const header_p = divElement.querySelectorAll('.section-3-header p');
	const redbox = divElement.querySelectorAll('.section-3-redbox');

	const elementInView = (el, dividend = 1) => {
		const elementTop = el.getBoundingClientRect().top;
	
		return (
		elementTop <=
		(window.innerHeight || divElement.documentElement.clientHeight) / dividend
		);
	};
	
	const elementOutofView = (el) => {
		const elementTop = el.getBoundingClientRect().top;
	
		return (
		elementTop > (window.innerHeight || divElement.divElementElement.clientHeight)
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
	const sum_input = divElement.querySelector('.section-1-input input');
	const sum_btn = divElement.querySelector('.section-1-input a');
	sum_btn.addEventListener("click", () => {
		sessionStorage.setItem("summoner", sum_input.value);
	})



	// 소환사 전적 검색 시


	// 전적 검색시 Enter 인식
	sum_input.addEventListener('keyup', function(e) {
		if (e.keyCode === 13) {
			sessionStorage.setItem("summoner", sum_input.value);
			window.location.href = "/summoner";
		}
	});
	MenuButton();
	return divElement;
};
