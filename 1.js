const body = document.getElementById('body')
const logo = document.getElementById('logo')
const moto1 = document.getElementById('moto1')
const moto2 = document.getElementById('moto2')
const option =document.getElementById('option')
const triangle=document.getElementById('triangle')
const shaper=document.getElementById('shaper')
const secondpage=document.getElementById('secondpage')
const heading1=document.getElementById('heading1')
const moto6=document.getElementById('moto6')
const heading2=document.getElementById('heading2')
const moto7=document.getElementById('moto7')
const heading3=document.getElementById('heading3')
const moto8=document.getElementById('moto8')
const triclick1=document.getElementById('triclick1')
const triclick2=document.getElementById('triclick2')
const prize=document.getElementById('prize')
const it=document.getElementById('it')
const v=document.getElementById('v')
// const cancel=document.getElementById('cancel')
const rightshape=document.getElementById('rightshape')
const box=document.getElementById('box')
const leftshape=document.getElementById('leftshape')
const img1=document.getElementById('img1')
const img2=document.getElementById('img2')
const img3=document.getElementById('img3')
const full=document.getElementById('full')
const geet1=document.getElementById('geet1')
const geet2=document.getElementById('geet2')
const geet3=document.getElementById('geet3')
function HOVER1() {
  geet1.style.display = "flex";

 
 
 }
 function HOVER2() {
  geet2.style.display = "flex";

 
 }
 function HOVER3() {
  geet3.style.display = "flex";

 }
 function HOVEROUT1() {
  geet1.style.display = "none";

}
function HOVEROUT2() {
  geet2.style.display = "none";
} 
function HOVEROUT3() {
  geet3.style.display = "none";

}




// const main=document.getElementById('main')
// const moto=document.getElementById('moto')


function show() {
  logo.style.opacity = 1;
  moto1.style.opacity = 1;
  moto1.style.transitionDuration="0.3s";
  moto2.style.opacity = 1;
  moto2.style.transitionDuration="0.2s";
 
}

function leave() {
  logo.style.opacity = 0;
  moto1.style.opacity = 0;
  moto2.style.opacity = 0;
}

function press(){
  body.style.backdropFilter="blur(20px)";
  body.style.overflow="hidden";
  triclick1.style.opacity=1;
  triclick2.style.opacity=1;
  triangle.style.opacity=0;
  
}



function cancel(){
  triclick1.style.opacity=0;
  triclick2.style.opacity=0;
  body.style.backdropFilter="blur(0px)";
  body.style.overflow="initial";
  triangle.style.opacity=1;
  triangle.style.position="fixed"
  
}
 function visible(){
  it.style.opacity=1;
  prize.style.opacity=1;
  option.style.opacity=1;
  option.style.transform="translateX(5.3rem)"
  option.style.transitionDuration="0.5s"
  prize.style.transitionDuration="0.5s"
  it.style.transitionDuration="0.5s"
 }
 
 function invisible(){
  it.style.opacity=0;
  prize.style.opacity=0;
  option.style.opacity=0;
  option.style.transform="translateX(-6rem)"
  
 }
 