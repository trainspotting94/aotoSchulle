//скрыть или показать дропдаун
function Dropdown() {
    const address = document.querySelector('.header-title__address')
    const addressText = document.querySelector('.header-title__address-text')
    const dropdown = document.querySelector('.dropdown')
    let dropdownItem = document.querySelectorAll('.dropdown__item')

    address.addEventListener('click', () => {
        let actualDisplay = getComputedStyle(dropdown).display;
        if (actualDisplay === 'none') {
            dropdown.style.display = 'flex'
        } else if (actualDisplay === 'flex') {
            dropdown.style.display = 'none'
        }
    })
    for (let i = 0; i < dropdownItem.length; i++) {
        dropdownItem[i].addEventListener('click', () => {
            addressText.innerText = dropdownItem[i].textContent
        })
    }
}
Dropdown()

//инициализация бегущей строки
$('.marquee').marquee({
    duration: 10000,
    gap: 50,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true
});

//инициализация слайдера





function swiperSwitch(){

    const swiper = new Swiper(".swiper-address", {
        slidesPerView: 'auto',
        spaceBetween: 5,
        watchOverflow: true,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
    });

    const classes = document.querySelector('.classes')
    const track = document.querySelector('.track')
    const swiperSlideTrack = document.querySelectorAll('.swiper-slide-track')
    const swiperSlideClasses = document.querySelectorAll('.swiper-slide-classes')
    const swiperAddress = document.querySelector('.swiper')

    classes.addEventListener('click', () => {
        classes.classList.add('classes_active')
        track.classList.remove('track_active')
        for (let i = 0; i < swiperSlideClasses.length ; i++) {
            swiperSlideClasses[i].style.display = 'flex'
        }
        for (let i = 0; i < swiperSlideTrack.length ; i++) {
            swiperSlideTrack[i].style.display = 'none'
        }
        swiperAddress.style.width = "100vw"
    })

    track.addEventListener('click', () => {
        track.classList.add('track_active')
        classes.classList.remove('classes_active')
        for (let i = 0; i < swiperSlideClasses.length ; i++) {
            swiperSlideClasses[i].style.display = 'none'
        }
        for (let i = 0; i < swiperSlideTrack.length ; i++) {
             swiperSlideTrack[i].style.display = 'flex'
        }
        swiperAddress.style.width = "99%"
    })
    swiperAddress.style.width = "100%"
}
swiperSwitch()