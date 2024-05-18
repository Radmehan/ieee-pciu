document.addEventListener("DOMContentLoaded", function () {
    console.log('js loading')
    let menuIcon = document.getElementById('menu-icon');
    let navLists = document.getElementById('nav-lists');


    let hero = document.querySelector('.hero');
    let navbar = document.querySelector('.navbar');
    let section = document.querySelector('.about');

    let hero_height = hero.offsetHeight;
    let navbar_height = navbar.offsetHeight;
    let section_height = section.offsetHeight;

    menuIcon.addEventListener('click', () => {
        if (navLists.style.opacity === '1') {
            navLists.style.opacity = '0';
            navLists.style.right = '-100%';
        } else {
            navLists.style.opacity = '1';
            navLists.style.right = '0%';
        }
    });

    window.addEventListener('scroll', () => {
        let scroll = window.pageYOffset;
        // console.log('scroll is', scroll);
        if (scroll >= hero_height) {
            navbar.style.background = 'black';
        }
        else {
            navbar.style.background = '#00000000';
        }
    });

    /**
 * Animation on scroll function and init
 */
    function aos_init() {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }
    window.addEventListener('load', () => {
        aos_init();
    });

});