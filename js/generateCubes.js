;(function () {
	function generateCubes() {

	const cubesL = 9,
		  cubes = [],
		  container = document.querySelector('.cubes');

	for (let i = 0; i < cubesL; i++) {
		const rotationX = Math.random() * 360,
			  rotationY = Math.random() * 360,
			  size = window.innerWidth * 0.104;
			  scale = Math.floor(Math.random() * (0.8 - 0.3 + 1)) + 0.3;
			  positionX = (Math.random() * (window.innerWidth - 200)),
			  positionY = (Math.random() * (window.innerHeight - 200));

		const cube = `
			<div class="cube__animation-wrapper" style="position: absolute; top: ${positionY}; left: ${positionX}; width: ${size}px; height: ${size}px;">
				<div class="cube" style="width: ${size}px; height: ${size}px; transform: scale(${scale}) rotateX(${rotationX}deg) rotateY(${rotationY}deg);">
					<div style="width: ${size}px; height: ${size}px;" class="cube__face cube__face--front"></div>
					<div style="width: ${size}px; height: ${size}px;" class="cube__face cube__face--back"></div>
					<div style="width: ${size}px; height: ${size}px;" class="cube__face cube__face--top"></div>
					<div style="width: ${size}px; height: ${size}px;" class="cube__face cube__face--bottom"></div>
					<div style="width: ${size}px; height: ${size}px;" class="cube__face cube__face--left"></div>
					<div style="width: ${size}px; height: ${size}px;" class="cube__face cube__face--right"></div>
				</div>
			</div>
		`;

		cubes.push(cube);

		const face = document.querySelectorAll('.cube__face');
		face.forEach(face => {
			console.log(face.className)
			if (face.className.includes('front')) {
				face.style.setProperty('transform', `translateZ(-${size*0.5}px)`);
			} else if (face.className.match('back')) {
				face.style.setProperty('transform', `translateZ(${size*0.5}px)`);
			}
			else if (face.className.includes('top')) {
				face.style.setProperty('transform', `translateY(-${size*0.5}px) rotateX(-90deg)`);
			}
			else if (face.className.includes('bottom')) {
				face.style.setProperty('transform', `translateY(${size*0.5}px) rotateX(90deg)`);
			} 
			else if (face.className.includes('left')) {
				face.style.setProperty('transform', `translateX(-${size*0.5}px) rotateY(-90deg)`);
			}
			else if (face.className.includes('right')) {
				face.style.setProperty('transform', `translateX(${size*0.5}px) rotateY(90deg)`);
			}
			
		});
		


		container.innerHTML += cube;
	}
}

	// generateCubes();
})();
