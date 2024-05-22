document.addEventListener("DOMContentLoaded", function () {
    console.log('js loading')
    let menuIcon = document.getElementById('menu-icon');
    let navLists = document.getElementById('nav-lists');


    let hero = document.querySelector('.hero');
    let navbar = document.querySelector('.navbar');
    let navcontainer = document.querySelector('#nav-container');
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
            navcontainer.style.height = '3.5rem';
        }
    });

    // swiper slider
    let portfolioSlider = new Swiper('.portfolio-slider', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    // publications
    /**
   * Init swiper slider with 3 slides at once in desktop view
   */
    new Swiper('.slides-3', {
        speed: 600,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 40
            },

            1200: {
                slidesPerView: 3,
            }
        }
    });

    /**
   * Initiate glightbox
   */
    const glightbox = GLightbox({
        selector: '.glightbox'
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