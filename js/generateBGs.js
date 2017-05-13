;(function () {
	const workImages = document.querySelectorAll('.showcase__item__image');

	workImages.forEach(workImage => generateBGs(workImage));

	function generateBGs (_this) {
		const innerImage = _this.children,
					shapes = ['circle', 'zigzag'],
					color = '#efefef',
					boundaries = _this.getBoundingClientRect(),
					topOffset = _this.offsetTop,
					minOffset = 20;

		let lastPos,
				shapeC = 20;

		console.log(topOffset);
		
		const testShape = new mojs.Shape({
			shape: shapes[0],
			stroke: color,
			strokeWidth: 3,
			radius: 5,
			fill: 'none',
			isShowStart: true,
			left: boundaries.left + 10,
			top: topOffset + 10
		});
	}

})();