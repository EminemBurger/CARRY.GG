// 메뉴 애니메이션
document.querySelector('.menu').addEventListener('click', () => {
	document.querySelectorAll('.target').forEach((item) => {
		item.classList.toggle('change');
	})
})

// 매뉴 애니메이션 끝