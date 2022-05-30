var swiper = new Swiper(".sliderService_1", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    }
});
var swiper = new Swiper(".sliderService_2", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    }
});

document.querySelectorAll('.tabs_link').forEach((item)=> {
    item.addEventListener('click', function(e){
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');


        document.querySelectorAll('.tabs_link').forEach(
            (child) => child.classList.remove('active')
        );
        document.querySelectorAll('.tabs_item').forEach(
            (child) => child.classList.remove('active')
        );

        item.classList.add('active');
        document.getElementById(id).classList.add('active');
    })
});
document.querySelector('.tabs_link').click();