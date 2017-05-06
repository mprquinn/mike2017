;(()=>{function a(){const b=9,c=[],d=document.querySelector('.cubes');for(let i=0;i<b;i++){const e=Math.random()*360,f=Math.random()*360,g=window.innerWidth*0.104;scale=Math.floor(Math.random()*1.5)+0.3;positionX=Math.random()*(window.innerWidth-200),positionY=Math.random()*(window.innerHeight-200);const h=`
			<div class="cube__animation-wrapper" style="position: absolute; top: ${positionY}; left: ${positionX}; width: ${g}px; height: ${g}px;">
				<div class="cube" style="width: ${g}px; height: ${g}px; transform: scale(${scale}) rotateX(${e}deg) rotateY(${f}deg);">
					<div style="width: ${g}px; height: ${g}px;" class="cube__face cube__face--front"></div>
					<div style="width: ${g}px; height: ${g}px;" class="cube__face cube__face--back"></div>
					<div style="width: ${g}px; height: ${g}px;" class="cube__face cube__face--top"></div>
					<div style="width: ${g}px; height: ${g}px;" class="cube__face cube__face--bottom"></div>
					<div style="width: ${g}px; height: ${g}px;" class="cube__face cube__face--left"></div>
					<div style="width: ${g}px; height: ${g}px;" class="cube__face cube__face--right"></div>
				</div>
			</div>
		`;c.push(h);const j=document.querySelectorAll('.cube__face');j.forEach(k=>{console.log(k.className);if(k.className.includes('front')){k.style.setProperty('transform',`translateZ(-${g*0.5}px)`)}else if(k.className.match('back')){k.style.setProperty('transform',`translateZ(${g*0.5}px)`)}else if(k.className.includes('top')){k.style.setProperty('transform',`translateY(-${g*0.5}px) rotateX(-90deg)`)}else if(k.className.includes('bottom')){k.style.setProperty('transform',`translateY(${g*0.5}px) rotateX(90deg)`)}else if(k.className.includes('left')){k.style.setProperty('transform',`translateX(-${g*0.5}px) rotateY(-90deg)`)}else if(k.className.includes('right')){k.style.setProperty('transform',`translateX(${g*0.5}px) rotateY(90deg)`)}});d.innerHTML+=h}}})();