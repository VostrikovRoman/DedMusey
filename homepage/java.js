

document.addEventListener('DOMContentLoaded', () => {
	const scrollItems = document.querySelectorAll('.scroll-item');



	const scrollAnimation = () => {
		let windowCenter = (window.innerHeight /20) + window.scrollY;
		scrollItems.forEach (el => {
			let  scrollOffset = el.offsetTop + (el.offsetHeight / 4) ;
			if (windowCenter >= scrollOffset) {
				el.classList.add('on');
			} else  {el.classList.remove('on');}
			
		});
	};
	scrollAnimation();
	window.addEventListener('scroll', () => {
		scrollAnimation();
	});	
});

