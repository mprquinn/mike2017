;(function () {
	const menuToggle = document.querySelector('.menu__toggle'),
	  intro = document.querySelector('.intro'),
	  menu = document.querySelector('.menu')

	let navToggled = false;

	window.addEventListener('load', () => {
		initSite();
	});

	menuToggle.addEventListener('click', toggleNav);

	function initSite() {
		intro.classList.add('intro--loaded');
	}


	function toggleNav() {
		toggleNav = !toggleNav;
		menu.classList.toggle('menu--opened');
		menuToggle.classList.toggle('menu--opened');
	}
})();