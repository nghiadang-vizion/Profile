

const navSlide = function (){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_content-list');
    const navLinks = document.querySelectorAll('.nav_content-item')

    
    burger.addEventListener('click',()=>{
        //toggle nav
        nav.classList.toggle('nav-active');

        //Animation item
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = `navItemFade ease forwards 0.5s  ${index / 7 + 0.5}s`;
                console.log(link.style.animation)
            }
        });

        // burger animation
        burger.classList.toggle('toggle');
    });


}

navSlide();