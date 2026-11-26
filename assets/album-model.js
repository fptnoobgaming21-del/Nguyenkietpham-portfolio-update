(()=>{'use strict';
document.querySelectorAll('[data-album]').forEach(root=>{
  const stage=root.querySelector('.pv-stage'),anchor=root.querySelector('.pv-anchor'),shell=root.querySelector('.pv-shell'),
    range=root.querySelector('input[type=range]'),out=root.querySelector('output'),status=root.querySelector('.pv-status'),
    pullBtn=root.querySelector('[data-action=pull]'),spinBtn=root.querySelector('[data-action=spin]');
  const S=380,T=7,DISC=S*.96,base='assets/model/';
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  let edition='portrait',pulled=false,yaw=-24,pitch=-14,zoom=.9,spin=false,frame=0,last=0;const pointers=new Map();

  function el(parent,cls){const d=document.createElement('div');d.className=cls;parent.append(d);return d}
  function face(parent,w,h,tf,cls,img){const f=el(parent,'pv-face '+(cls||''));
    Object.assign(f.style,{width:w+'px',height:h+'px',left:-w/2+'px',top:-h/2+'px',transform:tf});
    if(img)f.style.backgroundImage=img;return f}

  const world=el(anchor,'pv-object');
  function album(name){
    const g=el(world,'am-album'),sleeve=el(g,'am-group');
    const art=s=>`linear-gradient(118deg,rgba(255,255,255,.22),rgba(255,255,255,0) 38%,rgba(0,0,0,.06) 100%),url(${base}${name}-${s}.webp)`;
    // record first, so it sits between the two covers
    const slide=el(g,'am-group am-slide'),rotor=el(slide,'am-group am-rotor');
    face(rotor,DISC,DISC,`translateZ(.6px)`,'am-disc',`url(${base}side-a.webp)`);
    face(rotor,DISC,DISC,`translateZ(-.6px) rotateY(180deg)`,'am-disc',`url(${base}side-b.webp)`);
    face(sleeve,S,S,`translateZ(${T/2}px)`,'am-cover',art('front'));
    face(sleeve,S,S,`translateZ(${-T/2}px) rotateY(180deg)`,'am-cover',art('back'));
    face(sleeve,T,S,`translateX(${-S/2}px) rotateY(-90deg)`,'am-edge');
    face(sleeve,T,S,`translateX(${S/2}px) rotateY(90deg)`,'am-edge am-open');
    face(sleeve,S,T,`translateY(${-S/2}px) rotateX(90deg)`,'am-edge');
    face(sleeve,S,T,`translateY(${S/2}px) rotateX(-90deg)`,'am-edge');
    return {g,slide,rotor,name};
  }
  const albums={portrait:album('portrait'),landscape:album('landscape')};
  const shadow=el(stage,'am-shadow');stage.prepend(shadow);

  function layout(){
    const both=edition==='both',slideX=pulled?(both?S*.42:S*.58):0;
    for(const a of Object.values(albums)){
      const on=both||a.name===edition;a.g.style.display=on?'':'none';
      let x=0,z=0;
      if(both){x=a.name==='portrait'?-S*.62:S*.5;z=a.name==='portrait'?-60:40}
      else if(pulled)x=-S*.28;
      a.g.style.transform=`translate3d(${x}px,0,${z}px)`;
      a.slide.style.transform=`translateX(${slideX}px)`;
      a.rotor.classList.toggle('am-spinning',pulled&&!reduce);
    }
  }
  function draw(){
    const wide=edition==='both'?(pulled?1300:1120):(pulled?900:660);
    const fit=Math.min(1,stage.clientWidth/wide,stage.clientHeight/560);
    world.style.transform=`scale(${zoom*fit}) rotateX(${pitch}deg) rotateY(${yaw}deg)`;
    shadow.style.top=`calc(50% + ${(S/2+22)*zoom*fit}px)`;shadow.style.transform=`translate(-50%,0) scale(${zoom*fit*(edition==='both'?1.9:pulled?1.45:1)},1)`;
    range.value=Math.round(zoom*100);out.textContent=Math.round(zoom*100)+'%';
  }
  function stop(){spin=false;cancelAnimationFrame(frame);spinBtn.textContent='Auto rotate';spinBtn.setAttribute('aria-pressed','false')}
  function clearViews(){root.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed','false'))}
  const views={perspective:[-24,-14],front:[0,0],back:[180,0],edge:[-70,-8]};
  function view(v){stop();[yaw,pitch]=views[v];clearViews();root.querySelector(`[data-view=${v}]`).setAttribute('aria-pressed','true');
    status.textContent=v==='back'?'Back view: track list and record side B.':v==='front'?'Front view.':v+' view';draw()}
  root.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>view(b.dataset.view));
  root.querySelectorAll('[data-edition]').forEach(b=>b.onclick=()=>{edition=b.dataset.edition;
    root.querySelectorAll('[data-edition]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
    status.textContent={portrait:'Portrait-led edition.',landscape:'Landscape-led edition.',both:'Both editions side by side.'}[edition];layout();draw()});
  pullBtn.onclick=()=>{pulled=!pulled;pullBtn.textContent=pulled?'Put record back':'Pull out record';pullBtn.setAttribute('aria-pressed',String(pulled));
    status.textContent=pulled?'Record out: side A label. Turn the model around to see side B.':'Record back in the sleeve.';layout();draw()};
  range.oninput=()=>{zoom=+range.value/100;draw()};
  root.querySelector('[data-action=reset]').onclick=()=>{pulled=false;pullBtn.textContent='Pull out record';pullBtn.setAttribute('aria-pressed','false');zoom=.9;layout();view('perspective')};
  stage.onpointerdown=e=>{stop();stage.setPointerCapture(e.pointerId);pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});stage.focus({preventScroll:true})};
  stage.onpointermove=e=>{if(!pointers.has(e.pointerId))return;const prev=pointers.get(e.pointerId),next={x:e.clientX,y:e.clientY};clearViews();
    if(pointers.size===2){const other=[...pointers].find(([id])=>id!==e.pointerId)[1],before=Math.hypot(prev.x-other.x,prev.y-other.y);
      if(before>10)zoom=Math.max(.55,Math.min(1.6,zoom*Math.hypot(next.x-other.x,next.y-other.y)/before))}
    else{yaw+=(next.x-prev.x)*.45;pitch=Math.max(-80,Math.min(80,pitch-(next.y-prev.y)*.35))}
    pointers.set(e.pointerId,next);draw()};
  ['pointerup','pointercancel','lostpointercapture'].forEach(ev=>stage.addEventListener(ev,e=>pointers.delete(e.pointerId)));
  stage.onkeydown=e=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','+','=','-','Home'].includes(e.key))return;e.preventDefault();stop();clearViews();
    if(e.key==='Home'){zoom=.9;view('perspective')}if(e.key==='ArrowLeft')yaw-=10;if(e.key==='ArrowRight')yaw+=10;
    if(e.key==='ArrowUp')pitch=Math.max(-80,pitch-10);if(e.key==='ArrowDown')pitch=Math.min(80,pitch+10);
    if(['+','='].includes(e.key))zoom=Math.min(1.6,zoom+.1);if(e.key==='-')zoom=Math.max(.55,zoom-.1);draw()};
  function tick(t){if(!spin)return;if(last)yaw+=(t-last)*.012;last=t;draw();frame=requestAnimationFrame(tick)}
  spinBtn.onclick=()=>{if(spin)return stop();spin=true;last=0;clearViews();spinBtn.textContent='Pause rotation';spinBtn.setAttribute('aria-pressed','true');frame=requestAnimationFrame(tick)};
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stop()});
  const full=root.querySelector('[data-action=full]');if(!shell.requestFullscreen)full.hidden=true;
  full.onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await shell.requestFullscreen()}catch{status.textContent='Full screen is unavailable. Use the zoom slider instead.'}};
  document.addEventListener('fullscreenchange',()=>{full.textContent=document.fullscreenElement?'Exit full screen':'Full screen';draw()});
  new ResizeObserver(draw).observe(stage);layout();draw();
});})();
