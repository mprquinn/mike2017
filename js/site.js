;(function () {
	const menuToggle = document.querySelector('.menu__toggle'),
	  intro = document.querySelector('.intro'),
	  menu = document.querySelector('.menu'),
	  divider = document.querySelector('.intro__divider');

	let navToggled = false,
		color = 'black';

	window.addEventListener('load', () => {
		initSite();
		dividerSize();
	});
	window.addEventListener('resize', dividerSize);
	menuToggle.addEventListener('click', toggleNav);

	function initSite() {
		intro.classList.add('intro--loaded');
	}

	function dividerSize() {
		let tW = document.querySelector('.intro__name').offsetWidth;
		divider.style.width = `${tW}px`;
		console.log(tW);
	}

	function toggleNav() {
		toggleNav = !toggleNav;
		menu.classList.toggle('menu--opened');
		menuToggle.classList.toggle('menu--opened');
		if (color === 'black') {
			color = 'white';
		} else {
			color = 'black';
		}
	}
})();