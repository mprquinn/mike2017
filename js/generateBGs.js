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

		for (y = topOffset+minOffset; y < topOffset + (boundaries.bottom - boundaries.top) -minOffset; y+=minOffset) {
			const push = (lastY%2) !== 0 ? minOffset*1.5 : minOffset;

			lastY++;
			for (x = push; x < (boundaries.right - boundaries.left) -push; x+=minOffset) {

				const doodle = new mojs.Shape({
					shape: shapes[0],
					stroke: color,
					strokeWidth: {1 : 3},
					radius: {2.5 : 5},
					opacity: {0.3 : 1},
					fill: 'none',
					isShowStart: true,
					left: x,
					top: y,
					isYoyo: true,
					repeat: 99999,
					delay: Math.random() * 500,
				}).play();

				doodle.el.style.zIndex = 0;
			}
		}
		
	}

})();