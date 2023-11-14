let navBtn = document.querySelector('#nav-btn')
let menuItemcontainer = document.querySelector('.menu-itemcontainer')
let label2 = document.querySelectorAll('.menus>li>ul')
let label3 = document.querySelectorAll('.menus>li>ul>li>ul')

navBtn.onclick = (e)=>{
    menuItemcontainer.classList.toggle('menu-itemcontainer-hide')
    e.target.classList.toggle('fa-bars')
    e.target.classList.toggle('fa-xmark')
    
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

