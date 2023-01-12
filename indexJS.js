new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    clickable: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


function toggle(elem){
    const cont = document.querySelector('.brand__wrapper')
    cont.classList.toggle('wrapper--active')
    elem.children[1].innerText =  cont.classList.contains('wrapper--active') ? 'Скрыть' : 'Показать все';
    elem.children[0].classList.toggle('btn_icon--active')
}


