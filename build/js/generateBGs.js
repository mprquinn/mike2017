;(()=>{const f=document.querySelectorAll('.showcase__item__image');f.forEach(workImage=>a(workImage));function a(g){const h=g.children,i=['circle','zigzag'],j='#111111',k=g.getBoundingClientRect(),l=g.offsetTop,m=60;let n,o=20,p=0;const q=h[0].getBoundingClientRect();imageW=q.right-q.left,imageH=q.bottom-q.top,imageMidX=q.left+imageW/2,imageMidY=q.top+imageH/2,startR=imageW+20,endR=imageW*2;console.log(imageMidX,endR);const r=new mojs.Burst({left:q.left,top:q.top,radius:{50:250},count:8,degree:0,children:{shape:'circle',fill:'#111111',radius:20,duration:5000,strokeWidth:5}});window.addEventListener('click',e=>{r.replay()})}function b(){const g=window.pageYOffset;f.forEach(h=>{const i=h.dataset.offy,j=h.getBoundingClientRect(),k=(j.bottom-j.top)/2;if(g>=i-k){c(h)}})}function c(g){g.classList.add('showcase__item__image--animated')}function d(g){const h=g.offsetTop;g.setAttribute('data-offY',h)}f.forEach(workImage=>d(workImage));window.addEventListener('scroll',b)})();