const menuBtn = document.querySelector('.burger-menu');
const sliderMenu = document.querySelector('.burger-menu-slider');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
	if(!menuOpen) {
		menuBtn.classList.add('open');
		menuOpen = true;
	} else {
		menuBtn.classList.remove('open');
		menuOpen = false
	
}

	


});