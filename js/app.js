

const navSlide = function (){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_content-list');
    const navLinks = document.querySelectorAll('.nav_content-item')
    const menuItems = document.querySelectorAll('#nav li a[href*="#"]')

    console.log(menuItems);

    burger.addEventListener('click',()=>{
        //toggle nav
        nav.classList.toggle('nav-active');
        
        // burger animation
        burger.classList.toggle('toggle');

        //Animation item
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = `navItemFade ease forwards 0.5s  ${index / 7 + 0.5}s`;
            }
            console.log(link.style.animation)
        });
    });

    // đóng menu khi bấm vào item, chưa đóng khi bấm ra ngoài nav
    nav.onclick = function(e){
        if (e.target.id !== 'nav' && e.target.id !== 'burger') {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
        }
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = `navItemFade ease forwards 0.5s  ${index / 7 + 0.5}s`;
            }
            console.log(link.style.animation)
        });
    }

}
navSlide();

var lasstScrollTop = 0;
const navbar = document.querySelector('.header')
var srollTopBtn = document.querySelector('.social-icons')
window.addEventListener("scroll", function () {
    //ẩn hiện header
    var srollTop = this.window.pageYOffset || this.document.documentElement.scrollTop;
    
    if (srollTop > lasstScrollTop) {
        navbar.style.top = '-133px';
    }else{
        navbar.style.top = '0';
    }
    lasstScrollTop = srollTop;

    //ẩn hiện btn sroll top
    srollTopBtn.classList.toggle("active", this.window.scrollY > 800);
})

srollTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
