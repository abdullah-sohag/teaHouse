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
