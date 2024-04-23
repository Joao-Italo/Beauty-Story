    const swiper = new Swiper('.carrossel__container', {
    spaceBetween: 15,
    slidesPerView: 3,
    pagination:{
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});

    const swiper2= new Swiper('.carrossel__container-apresentacao', {
    spaceBetween: 0.5,
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination-apresentacao',
        type: 'bullets',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
     },
    
});