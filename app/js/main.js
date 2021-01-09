import './components/burger';
import './components/scroll';

import Swiper from 'swiper/bundle';

const swiper = new Swiper(".reviews-slider", {
    // direction: 'vertical',
    spaceBetween: 50,
    speed: 800,
    navigation: {
        nextEl: '.arrow-btn__next',
        prevEl: '.arrow-btn__prev',
    },
});

