(()=>{'use strict';document.querySelectorAll('[data-package]').forEach(root=>{
 const bath=root.dataset.package==='bath-fizzers',stage=root.querySelector('.pv-stage'),obj=root.querySelector('.pv-object'),shell=root.querySelector('.pv-shell'),range=root.querySelector('input'),out=root.querySelector('output'),status=root.querySelector('.pv-status'),openButton=root.querySelector('[data-action=open]'),spinButton=root.querySelector('[data-action=spin]');
 const W=bath?360:220,H=bath?44:330,D=bath?138:55;let revealed=false;let yaw=-25,pitch=-22,zoom=.9,opened=false,spin=false,frame=0,last=0;const pointers=new Map();
 function face(parent,w,h,x,y,z,rx,ry,asset,cls=''){const el=document.createElement('div');el.className='pv-face '+cls;Object.assign(el.style,{width:w+'px',height:h+'px',left:-w/2+'px',top:-h/2+'px',transform:`translate3d(${x}px,${y}px,${z}px) rotateX(${rx}deg) rotateY(${ry}deg)`});if(asset)el.style.backgroundImage=`url(assets/model/${asset}.webp)`;parent.append(el);return el}
 face(obj,W,H,0,0,-D/2,0,180,bath?null:'back');
 face(obj,D,H,-W/2,0,0,0,-90,bath?null:'side');face(obj,D,H,W/2,0,0,0,90,bath?null:'side');
 face(obj,W,D,0,H/2,0,-90,0,bath?'bottom':null);
 let lidInside,innerCover,figure;const sleeve=[];const hinge=document.createElement('div');hinge.className='pv-hinge';obj.append(hinge);
 if(bath){
  face(obj,W,H,0,0,D/2,0,0,null);
  face(obj,W-4,D-4,0,-H/2+5,0,90,0,'tray','pv-card');
  for(let i=-1;i<=1;i++)face(obj,106,106,i*116,-H/2+3,0,90,0,null,'pv-fizzer');
  lidInside=face(hinge,W,D,0,-D/2,1,0,0,'inside','pv-card');
  figure=face(hinge,130,108,-105,-56,6,0,0,'figure','pv-figure');
  innerCover=face(obj,W-4,D-4,0,-H/2+1,0,90,0,'bubbles','pv-card');
  sleeve.push(face(obj,56,D+4,0,-H/2-3,0,90,0,'logo'));
  sleeve[0].style.backgroundSize='32px 32px';sleeve[0].style.backgroundPosition='center';
  sleeve.push(face(obj,56,H+5,0,0,D/2+2,0,0,null));
  sleeve.push(face(obj,56,H+5,0,0,-D/2-2,0,180,null));
  const reveal=document.createElement('button');reveal.textContent='Reveal fizzers';reveal.hidden=true;reveal.dataset.action='reveal';reveal.setAttribute('aria-pressed','false');openButton.after(reveal);reveal.onclick=()=>{revealed=!revealed;reveal.textContent=revealed?'Replace inner cover':'Reveal fizzers';reveal.setAttribute('aria-pressed',String(revealed));draw()};
  face(hinge,W,D,0,-D/2,-1,180,0,'cover');
 }else{
  face(obj,W,H,0,0,D/2-1,0,0,'instructions','pv-card');
  face(obj,W,D,0,-H/2,0,90,0,'top');
  face(hinge,W,H,0,-H/2,1,0,0,'cover','pv-card');
  face(hinge,W,H,0,-H/2,-1,180,0,'board','pv-card');
 }
 function draw(){const fit=Math.min(1,stage.clientWidth/570,stage.clientHeight/530);if(bath){sleeve.forEach(f=>f.style.display=opened?'none':'');innerCover.style.display=revealed?'none':'';figure.style.display=revealed?'none':'';lidInside.style.backgroundImage=`url(assets/model/${revealed?'scene':'inside'}.webp)`;root.querySelector('[data-action=reveal]').hidden=!opened;}obj.style.transform=`translateY(${opened&&!bath?-45:0}px) scale(${zoom*fit*(opened&&!bath?.78:1)}) rotateX(${pitch}deg) rotateY(${yaw}deg)`;hinge.style.transform=bath?`translate3d(0,${-H/2}px,${-D/2}px) rotateX(${opened?10:-90}deg)`:`translate3d(0,${H/2}px,${D/2}px) rotateX(${opened?-105:0}deg)`;range.value=Math.round(zoom*100);out.textContent=Math.round(zoom*100)+'%';}
 function stop(){spin=false;cancelAnimationFrame(frame);spinButton.textContent='Auto rotate';spinButton.setAttribute('aria-pressed','false')}
 function clearViews(){root.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed','false'))}
 const views={perspective:[-25,-22],front:[0,bath?-65:0],back:[180,bath?65:0],top:[0,-85]};
 function view(v){stop();[yaw,pitch]=views[v];clearViews();root.querySelector(`[data-view=${v}]`).setAttribute('aria-pressed','true');status.textContent=v+' view';draw()}
 root.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>view(b.dataset.view));
 openButton.onclick=()=>{stop();opened=!opened;openButton.textContent=opened?'Close package':'Open package';openButton.setAttribute('aria-pressed',String(opened));yaw=-18;pitch=opened?(bath?-25:-32):-22;clearViews();status.textContent=opened?(bath?'Open package: illustrated lid and three-product tray.':'Open package: instructions and fold-down game board.'):'Package closed.';draw()};
 range.oninput=()=>{zoom=+range.value/100;draw()};
 root.querySelector('[data-action=reset]').onclick=()=>{opened=false;revealed=false;const reveal=root.querySelector('[data-action=reveal]');if(reveal){reveal.textContent='Reveal fizzers';reveal.setAttribute('aria-pressed','false')}openButton.textContent='Open package';openButton.setAttribute('aria-pressed','false');zoom=.9;view('perspective')};
 stage.onpointerdown=e=>{stop();stage.setPointerCapture(e.pointerId);pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});stage.focus({preventScroll:true})};
 stage.onpointermove=e=>{if(!pointers.has(e.pointerId))return;const prev=pointers.get(e.pointerId),next={x:e.clientX,y:e.clientY};clearViews();if(pointers.size===2){const other=[...pointers].find(([id])=>id!==e.pointerId)[1],before=Math.hypot(prev.x-other.x,prev.y-other.y);if(before>10)zoom=Math.max(.55,Math.min(1.5,zoom*Math.hypot(next.x-other.x,next.y-other.y)/before))}else{yaw+=(next.x-prev.x)*.45;pitch=Math.max(-90,Math.min(90,pitch-(next.y-prev.y)*.35))}pointers.set(e.pointerId,next);draw()};
 ['pointerup','pointercancel','lostpointercapture'].forEach(ev=>stage.addEventListener(ev,e=>pointers.delete(e.pointerId)));
 stage.onkeydown=e=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','+','=','-','Home'].includes(e.key))return;e.preventDefault();stop();clearViews();if(e.key==='Home'){zoom=.9;view('perspective')}if(e.key==='ArrowLeft')yaw-=10;if(e.key==='ArrowRight')yaw+=10;if(e.key==='ArrowUp')pitch=Math.max(-90,pitch-10);if(e.key==='ArrowDown')pitch=Math.min(90,pitch+10);if(['+','='].includes(e.key))zoom=Math.min(1.5,zoom+.1);if(e.key==='-')zoom=Math.max(.55,zoom-.1);draw()};
 function tick(t){if(!spin)return;if(last)yaw+=(t-last)*.012;last=t;draw();frame=requestAnimationFrame(tick)}
 spinButton.onclick=()=>{if(spin)return stop();spin=true;last=0;clearViews();spinButton.textContent='Pause rotation';spinButton.setAttribute('aria-pressed','true');frame=requestAnimationFrame(tick)};
 document.addEventListener('visibilitychange',()=>{if(document.hidden)stop()});const full=root.querySelector('[data-action=full]');if(!shell.requestFullscreen)full.hidden=true;full.onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await shell.requestFullscreen()}catch{status.textContent='Full screen is unavailable. Use the zoom slider instead.'}};document.addEventListener('fullscreenchange',()=>{full.textContent=document.fullscreenElement?'Exit full screen':'Full screen';draw()});new ResizeObserver(draw).observe(stage);draw();
 });})();
