const prev = document.getElementById('prevBtn')
const next = document.getElementById('nextBtn')
const slider = document.querySelector('.slider')
const img = document.querySelectorAll('.slider img')


let index = 1;

const changeSlide = e => {
    showSlide(index += e)
}

const showSlide = e => {

    (e > img.length) ? (index = 1) : null;
    (e < 1) ? (index = img.length) : null;

    for (let image of img) {
        image.style.opacity = '0';
    }

    img[index - 1].style.opacity = '1';

}

showSlide();


