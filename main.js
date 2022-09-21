const menuBtn = document.querySelector('.burger-menu');
const sliderMenu = document.querySelector('.burger-menu-slider');
let menuOpen = false;


const burgerNavigation = `<nav class="burger-navigation">
					
					<a href="#" class="divhome">HOME</a>
					<a href="#section-about" class="divabout">ABOUT</a>
					<a href="#section-services" class="divservices">SERVICES</a>
					<a href="#section-activities" class="divactivities">ACTIVITIES</a>
					<a href="#section-team" class="divteam">TEAM</a>
					<a href="#section-contact" class="divcontact">CONTACT</a>



				</nav>`


menuBtn.addEventListener('click', () => {
	if(!menuOpen) {
		menuBtn.classList.add('open');
		sliderMenu.classList.add('open')
		sliderMenu.innerHTML = burgerNavigation;
		menuOpen = true;
	} else {
		menuBtn.classList.remove('open');
		sliderMenu.classList.remove('open')
		sliderMenu.innerHTML = "";
		menuOpen = false
	
}

	


});