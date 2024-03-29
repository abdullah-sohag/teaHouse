const navBar = document.querySelector('nav')
const navBtn = document.querySelector('#nav-btn')
const menuItemcontainer = document.querySelector('.menu-itemcontainer')
const label2 = document.querySelectorAll('.menus>li>ul')
const label3 = document.querySelectorAll('.menus>li>ul>li>ul')

// nab menu
navBtn.onclick = (e)=>{
    let b = e.target
    navBar.classList.toggle('nav-height')
    menuItemcontainer.classList.toggle('menu-itemcontainer-hide')
    b.classList.toggle('fa-bars')
    b.classList.toggle('fa-xmark')
}

for (let e of label2) {
    e.parentElement.classList.add('drop-icon')

   

    e.parentElement.addEventListener('click', function(){
        
        e.classList.toggle('drop-down-height')
        e.parentElement.classList.toggle('drop-icon-transition')
    })

}


for (let e of label3) {
    e.parentElement.classList.add('drop-icon')

    e.parentElement.addEventListener('click', function(f){
        f.stopPropagation()
        e.classList.toggle('drop-down-height')
        e.parentElement.classList.toggle('drop-icon-transition')
    })
}
// -/nab menu

// splite js
let splide = new Splide( '.splide-one', {
    type  : 'fade',
    rewind: true,
  } );
  
  splide.mount();


let splideTwo = new Splide( '.splide-two', {
    type   : 'loop',
  
  focus  : 'center',
  pagination : false,
  gap:10,
  breakpoints : {
    500: {
        perPage: 1,
    },
    768: {
        perPage: 2,
    },
    2000: {
        perPage: 3,
    },
  },
  } );
  
  splideTwo.mount();

  let splideThree = new Splide('.splide-three',{
    type   : 'loop',
  });
  splideThree.mount();
// -/splite js

// AOS
AOS.init();
// -/ AOS

// tilt js
VanillaTilt.init(document.querySelectorAll(".product-card-cover"), {
    max: 25,
    speed: 400
});
// -/ tilt js

// typed umd
let typed = new Typed('.animated-text',{
    strings: ['the body','our mind','our helth'],
    typeSpeed: 200,
    backSpeed: 150,
    loop:true,
})
// -/ typed umd

// loader
window.addEventListener('load',()=>{
    
    const loader = document.querySelector('.loader')
    setTimeout(hideLoder,1500)
    
    function hideLoder (){
        // loader.style.display = 'none'
        loader.classList.add('loader--hiden')
        loader.classList.add('lodar--none')
    }

    loader.addEventListener('transitionend',()=>{
             document.body.removeChild(loader)
        
             loader.remove()
        })

})
// -/loader