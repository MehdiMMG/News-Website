const swiper = new Swiper('.swiper', {

    loop: 'true',

    // If we need pagination
    pagination: {
        el: '.swiper-pagination'
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar'
    },
});

$(function () {

    var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,
        spaceBetween: 30,
        slidesPerView: 'auto',
        loop: true,
        // If we need pagination
        pagination: '.swiper-pagination',

        // Navigation arrows
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });

});