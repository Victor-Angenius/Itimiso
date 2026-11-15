const D=[
{c:'moon',n:'Eagle (Apollo 11 Descent Stage)',y:1969,s:'Silent',t:'The lower stage of the Eagle lander still stands at Tranquility Base. Its upper stage carried Armstrong and Aldrin back to orbit.',f:'The descent stage served as the launch pad for the ascent stage. A plaque on its leg carries a message of peace from humankind.'},
{c:'moon',n:'Lunar Roving Vehicle',y:1971,s:'Silent',t:'A folding electric car parked at Apollo 15, 16, and 17. Its wire wheels and two-astronaut capacity let it roam far.',f:'Its top speed was about 13 km/h. Its TV camera was operated from Earth to record the liftoffs of the Apollo 16 and 17 ascent stages.'},
{c:'moon',n:'Laser Retroreflector',y:1969,s:'Still active',t:'Panels of corner-cube mirrors deployed by Apollo 11, 14, and 15. Scientists fire lasers from Earth and time how long the reflection takes.',f:'These measurements pinned down the Earth-Moon distance with great precision, and showed that the Moon drifts away about 3.8 cm every year.'},
{c:'moon',n:'ALSEP (Apollo Science Package)',y:1969,s:'Inactive',t:'A nuclear-powered station of instruments that measured moonquakes, heat flow, and the solar wind.',f:'Its seismometer recorded moonquakes for years. The entire station was switched off from Earth in 1977.'},
{c:'moon',n:'Surveyor 3',y:1967,s:'Silent',t:'An uncrewed robotic lander that was visited again by the Apollo 12 astronauts in 1969.',f:'Its camera and a section of its plumbing were brought home for study. Earth bacteria may have survived aboard, though this is still debated.'},
{c:'mars',n:'Sojourner',y:1997,s:'Inactive',t:'NASA\u0027s first Mars rover, about the size of a microwave oven. It worked from the Mars Pathfinder lander.',f:'Designed to last 7 sols, it worked for 83. Communication ended along with its lander in September 1997.'},
{c:'mars',n:'Spirit',y:2004,s:'Inactive',t:'Opportunity\u0027s twin rover, which landed in Gusev Crater and found signs that hot water once flowed there.',f:'It became stuck in soft sand in 2009. Its last contact came in March 2010, and the mission was declared over in 2011.'},
{c:'mars',n:'Opportunity',y:2004,s:'Inactive',t:'A rover designed to work for 90 sols that instead survived about 14 years at Meridiani Planum.',f:'It covered 45 km, roughly a marathon. The global dust storm of 2018 covered its solar panels. The mission officially ended in February 2019.'},
{c:'mars',n:'InSight',y:2018,s:'Inactive',t:'A stationary lander that listened to the pulse of Mars\u0027 interior through its seismometer.',f:'It recorded hundreds of marsquakes and revealed the size of the planet\u0027s core. Its panels grew too dusty, and the mission ended in December 2022.'},
{c:'mars',n:'Ingenuity',y:2021,s:'Inactive',t:'The first tiny helicopter to fly on another planet, traveling alongside the Perseverance rover.',f:'It made 72 flights, far beyond the planned 5. Its rotor blades broke in January 2024, and it was retired.'},
{c:'mars',n:'Curiosity',y:2012,s:'Still active',t:'A small-car-sized rover that is still exploring Gale Crater today. Not abandoned equipment, but its story matters.',f:'It proved that Mars once held a lake with chemistry that could have supported microbial life.'},
{c:'deep',n:'Voyager 1',y:1977,s:'Still active',t:'The most distant human-made object from Earth. It has crossed the boundary of the heliosphere and is exploring interstellar space.',f:'Its signal takes more than 22 hours to reach Earth. It carries a Golden Record holding sounds and images of Earth.'},
{c:'deep',n:'Voyager 2',y:1977,s:'Still active',t:'The only spacecraft ever to visit Uranus and Neptune.',f:'It entered interstellar space in 2018. Both Voyagers keep working, with instruments switched off one by one to save power.'},
{c:'deep',n:'Pioneer 10',y:1972,s:'Inactive',t:'The first spacecraft to cross the asteroid belt and encounter Jupiter.',f:'Its last signal was received in January 2003. It carries a plaque with drawings of humans and a map of the Solar System.'},
{c:'deep',n:'New Horizons',y:2006,s:'Still active',t:'The spacecraft that flew past Pluto in 2015 and then headed into the Kuiper Belt.',f:'It gave us the first close-up photos of Pluto\u0027s surface, including a heart-shaped plain named Tombaugh Regio.'}
];
const TL=[[1966,'Surveyor 1','America\u0027s first soft landing on the Moon.'],[1969,'Apollo 11','Humans walk on the Moon for the first time.'],[1972,'Apollo 17','The last human mission to the Moon to this day.'],[1976,'Viking 1 and 2','The first landers to survive for a long time on Mars.'],[1977,'Voyager 1 and 2','The journey to the outer planets begins.'],[1997,'Sojourner','The first rover to touch Mars.'],[2004,'Spirit and Opportunity','Twin rovers set out to hunt for signs of water.'],[2012,'Voyager 1 leaves the heliosphere','The first craft in interstellar space. Curiosity lands.'],[2018,'Opportunity goes silent','A dust storm ends contact. InSight arrives.'],[2021,'Ingenuity','The first flight on another planet.'],[2024,'Ingenuity retires','Rotor damage ends it after 72 flights.']];
const Q=[
['How long was Opportunity expected to work?',['90 sols','14 years','1 year'],0,'The plan was 90 sols, but it survived about 14 years.','moon'],
['What is the retroreflector on the Moon used for?',['Lighting lamps','Measuring the Earth-Moon distance with lasers','Storing photos'],1,'Lasers bounce off it to measure the distance with great precision.','moon'],
['Which spacecraft is farthest from Earth?',['Pioneer 10','Curiosity','Voyager 1'],2,'Voyager 1 is exploring interstellar space.','space'],
['What makes Ingenuity special?',['The first rover','The first helicopter on another planet','The first lander'],1,'It flew 72 times on Mars.','mars'],
['Which Apollo was the last to carry humans to the Moon?',['Apollo 11','Apollo 13','Apollo 17'],2,'December 1972.','moon'],
['What did the Apollo astronauts leave on the Moon to make room for rock samples?',['Their spacesuits','Equipment they no longer needed','Their food supplies'],1,'Every kilogram of equipment left behind meant another kilogram of rock could come home.','moon'],
['Why can astronaut footprints last millions of years?',['Because of low gravity','Because there is no wind or rain','Because the ground is frozen'],1,'With no weather at all, nothing sweeps the footprints away.','moon'],
['What powered the ALSEP science station on the Moon?',['Solar panels only','A nuclear power source','Batteries dropped from orbit'],1,'ALSEP ran on nuclear power and was switched off from Earth in 1977.','moon'],
['What was special about Surveyor 3?',['It returned to Earth by itself','It was visited again by Apollo 12 astronauts','It was the first spacecraft on Mars'],1,'Apollo 12 landed nearby and brought parts of it home for study.','moon'],
['How fast could the Lunar Roving Vehicle drive?',['About 3 km/h','About 13 km/h','About 130 km/h'],1,'Its top speed was about 13 km/h, and its TV camera was operated from Earth.','moon'],
['What ended the Opportunity mission in 2018?',['A meteor strike','A global dust storm that covered its solar panels','It drove into a canyon'],1,'The dust storm blotted out the Sun, so its panels could no longer charge.','mars'],
['What did InSight study on Mars?',['The planet\u0027s interior through marsquakes','The polar ice caps','The atmosphere'],0,'Its seismometer recorded hundreds of marsquakes and revealed the size of Mars\u0027 core.','mars'],
['What does each Voyager carry for anyone who might find it?',['A file of digital photos','A Golden Record with sounds and images of Earth','A sample of Moon rock'],1,'The Golden Record holds greetings, music, and sounds of nature.','space'],
['What is the Pale Blue Dot?',['A photo of Earth taken by Voyager 1 from billions of km away','A comet discovered by Pioneer 10','A crater on the Moon'],0,'In 1990 Voyager 1 turned its camera around and photographed Earth as a tiny dot.','space'],
['What did New Horizons reveal in 2015?',['The first close-up photos of Pluto, with a heart-shaped plain','Life on Europa','Rings around Mercury'],0,'Its photos showed Tombaugh Regio, the famous heart-shaped plain.','space']
];
const $=(s,e=document)=>e.querySelector(s),B=document.body,pg=B.dataset.page;
const L=[['index','Home'],['bulan','Moon'],['mars','Mars'],['antariksa','Space'],['kuis','Quiz']];
B.insertAdjacentHTML('afterbegin',`<div id=bar></div><canvas id=sky></canvas><header id=hdr><a class=logo href=index.html>Itimiso</a><nav>${L.map(([h,t])=>`<a href=${h}.html class="${h==pg?'on':''}">${t}</a>`).join('')}</nav></header><button id=top title="Back to top">↑</button>`);
B.insertAdjacentHTML('beforeend','<footer>A NASA Space Apps Challenge project. Victor Angenius 2026.</footer>');
const cv=$('#sky'),cx=cv.getContext('2d');let W,H,S=[],M=[];
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;S=Array.from({length:130},()=>({x:Math.random()*W,y:Math.random()*H,z:Math.random()*2+.4,p:Math.random()*6}))}
rs();addEventListener('resize',rs);
setInterval(()=>{if(document.hidden||M.length>3)return;M.push({x:Math.random()*W*.7+W*.3,y:Math.random()*H*.35,vx:-(5+Math.random()*4),vy:3+Math.random()*2,life:1})},3800);
(function f(t){
cx.clearRect(0,0,W,H);
cx.fillStyle='#fff';
for(const s of S){cx.globalAlpha=.3+.7*Math.abs(Math.sin(t/900+s.p));cx.fillRect(s.x,((s.y-scrollY*s.z*.15)%H+H)%H,s.z,s.z)}
for(let i=M.length-1;i>=0;i--){const m=M[i];m.x+=m.vx;m.y+=m.vy;m.life-=.012;
if(m.life<=0||m.x<-60){M.splice(i,1);continue}
const g=cx.createLinearGradient(m.x,m.y,m.x-m.vx*10,m.y-m.vy*10);
g.addColorStop(0,`rgba(255,230,150,${.85*m.life})`);g.addColorStop(1,'rgba(255,230,150,0)');
cx.strokeStyle=g;cx.lineWidth=1.6;cx.globalAlpha=1;cx.beginPath();cx.moveTo(m.x,m.y);cx.lineTo(m.x-m.vx*10,m.y-m.vy*10);cx.stroke()}
cx.globalAlpha=1;
requestAnimationFrame(f)})(0);
addEventListener('scroll',()=>{
const y=scrollY;
$('#bar').style.width=y/Math.max(1,B.scrollHeight-innerHeight)*100+'%';
document.documentElement.style.setProperty('--sy',y);
$('#hdr').classList.toggle('compact',y>60);
const h=$('.hero'),sh=$('.shint');
if(h){h.classList.toggle('fading',y>140);if(sh)sh.classList.toggle('hide',y>80)}
$('#top').classList.toggle('show',y>600);
},{passive:true});
$('#top').onclick=()=>scrollTo({top:0,behavior:'smooth'});
function count(e){const n=+e.dataset.n,t0=performance.now();(function u(t){const p=Math.min(1,(t-t0)/1600);e.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(u)})(t0)}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');e.target.querySelectorAll('[data-n]').forEach(count);io.unobserve(e.target)}}),{threshold:.15});
const go=()=>document.querySelectorAll('.rv:not(.in),.rv-l:not(.in),.rv-r:not(.in),.rv-z:not(.in)').forEach(e=>io.observe(e));
function tilt(){document.querySelectorAll('.dk').forEach(k=>{
k.onmousemove=e=>{const r=k.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
k.style.setProperty('--mx',x+'px');k.style.setProperty('--my',y+'px');
k.style.transform=`perspective(700px) rotateX(${(y/r.height-.5)*-7}deg) rotateY(${(x/r.width-.5)*7}deg)`};
k.onmouseleave=()=>k.style.transform=''})}
const g=$('#cards');
if(g){const c=B.dataset.cat,items=D.filter(d=>d.c==c);
const sts=['All',...new Set(items.map(d=>d.s))];
g.insertAdjacentHTML('beforebegin',`<div class=f>${sts.map((s,i)=>`<button class="${i?'':'on'}">${s}</button>`).join('')}</div>`);
g.innerHTML=items.map((d,i)=>`<article class="card rv" style="transition-delay:${(i%3)*.1}s" data-s="${d.s}"><div class=ring><b>${d.y}</b></div><span class=st>${d.s}</span><h3>${d.n}</h3><p>${d.t}</p><div class=more>${d.f}</div></article>`).join('');
g.onclick=e=>{const k=e.target.closest('.card');if(k)k.classList.toggle('open')};
$('.f').onclick=e=>{if(e.target.tagName!='BUTTON')return;document.querySelectorAll('.f button').forEach(b=>b.classList.remove('on'));e.target.classList.add('on');g.querySelectorAll('.card').forEach(k=>k.style.display=e.target.textContent=='All'||k.dataset.s==e.target.textContent?'':'none')}}
const tl=$('#tl');if(tl)tl.innerHTML=TL.map(([y,n,t],i)=>`<div class="ti rv-${i%2?'r':'l'}" style="transition-delay:${(i%3)*.08}s"><b>${y}</b> ${n}<p>${t}</p></div>`).join('');
const mq=$('.mq div');if(mq){const s=D.map(d=>d.n.toUpperCase()).join(' &nbsp;/&nbsp; ');mq.innerHTML=s+' &nbsp;/&nbsp; '+s}
const qz=$('#quiz');if(qz){let i=0,sc=0;const LB=['A','B','C'],TP={moon:'The Moon',mars:'Mars',space:'Deep Space'};
const show=()=>{delete qz.dataset.l;if(i>=Q.length){const pc=Math.round(sc/Q.length*100),msg=pc>=80?'Out of this world! You are ready to become a space storyteller.':pc>=50?'Not bad! A quick reread of the Moon, Mars, and Space pages will sharpen your memory.':'Try reading the Moon, Mars, and Space pages again.';
qz.innerHTML=`<div class="qpanel qresult"><span class=qcount>Quiz complete</span><div class=big>${sc}<small style="font-size:.4em;color:var(--mut)"> / ${Q.length}</small></div><p>${msg}</p><a class="btn gold" href=kuis.html>Retry</a></div>`;return}
const [q,o,a,ex,tp]=Q[i];qz.innerHTML=`<div class=qpanel><div class=q><div class=qhead><span class=qcount>Question ${i+1} of ${Q.length}</span><span class=qscore>Score ${sc}</span></div><div class=qprog><i style="width:${i/Q.length*100}%"></i></div><span class="st" style="display:block;margin-bottom:.4rem">${TP[tp]||''}</span><h3>${q}</h3>${o.map((x,j)=>`<button data-j=${j}><i>${LB[j]}</i>${x}</button>`).join('')}</div></div>`;
qz.onclick=e=>{const b=e.target.closest('button');if(!b||qz.dataset.l)return;qz.dataset.l=1;const j=+b.dataset.j;if(j==a)sc++;qz.querySelector('.qprog i').style.width=(i+1)/Q.length*100+'%';qz.querySelector('.qscore').textContent='Score '+sc;b.classList.add(j==a?'ok':'no');qz.querySelectorAll('.q button')[a].classList.add('ok');qz.querySelector('.q').insertAdjacentHTML('beforeend',`<small>${ex}</small><button id=nx>${i+1>=Q.length?'See result':'Next'}</button>`);$('#nx').onclick=ev=>{ev.stopPropagation();i++;show()}}};show()}
go();tilt();
