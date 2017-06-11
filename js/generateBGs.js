;(function () {
	const workImages = document.querySelectorAll('.showcase__item__image');

	workImages.forEach(workImage => generateBGs(workImage));

	function generateBGs (_this) {
		const innerImage = _this.children,
					shapes = ['circle', 'zigzag'],
					color = '#111111',
					boundaries = _this.getBoundingClientRect(),
					topOffset = _this.offsetTop,
					minOffset = 60;

		let lastPos,
				shapeC = 20,
				lastY = 0;

		// for (y = topOffset+minOffset; y < topOffset + (boundaries.bottom - boundaries.top) -minOffset; y+=minOffset) {
		// 	const push = (lastY%2) !== 0 ? minOffset*1.5 : minOffset;

		// 	lastY++;
		// 	for (x = push; x < (boundaries.right - boundaries.left) -push; x+=minOffset) {

		// 		// const doodle = new mojs.Shape({
		// 		// 	shape: shapes[0],
		// 		// 	stroke: color,
		// 		// 	strokeWidth: {1 : 3},
		// 		// 	radius: {2.5 : 5},
		// 		// 	opacity: {0.3 : 1},
		// 		// 	fill: 'none',
		// 		// 	isShowStart: true,
		// 		// 	left: x,
		// 		// 	top: y,
		// 		// 	isYoyo: true,
		// 		// 	repeat: 99999,
		// 		// 	delay: Math.random() * 500,
		// 		// });

		// 		// doodle.el.style.zIndex = -1;

		// 	}
		// }


				const imageBounds = innerImage[0].getBoundingClientRect();
							imageW = imageBounds.right - imageBounds.left,
							imageH = imageBounds.bottom - imageBounds.top,
							imageMidX = imageBounds.left + (imageW / 2),
							imageMidY = imageBounds.top + (imageH / 2),
							startR = imageW + 20,
							endR = imageW * 2;

				// Create a Burst instead
				console.log(imageMidX, endR)
			const showcaseBurst = new mojs.Burst ({
				left: imageBounds.left,
				top: imageBounds.top,
				radius: { 50 : 250 },
				count: 8,
				degree: 0,
				// opacity: { 0 : 1},
				children: {
					shape: 'circle',
					fill: '#111111',
					radius: 20,
					duration: 5000,
					strokeWidth: 5
				}
			});


		window.addEventListener('click', function (e) {
			showcaseBurst.replay();
		});
		
	}

	function trigger () {
		const scrolled = window.pageYOffset;
		workImages.forEach(workImage => {
			const trigger = workImage.dataset.offy,
						boundaries = workImage.getBoundingClientRect(),
						halfH = (boundaries.bottom - boundaries.top) / 2;
			if (scrolled >= trigger - halfH) {
				animateIn(workImage);
			}
		})
	}

	function animateIn (_this) {
		_this.classList.add('showcase__item__image--animated');
	}

	function generateOffset (_this) {
		const offY = _this.offsetTop;
		_this.setAttribute('data-offY', offY);
	}


	workImages.forEach(workImage => generateOffset(workImage));
	window.addEventListener('scroll', trigger);

})();