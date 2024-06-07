let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slide').length;

    currentIndex += direction;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    const offset = -currentIndex * 25;
    slides.style.transform = `translateX(${offset}%)`;
}

function changeArrowColorOnMouseOver(whichArrow){
    const btn = document.querySelector(`.slider-arrow-${whichArrow}`)
    btn.src = 'assets/arrow-blue.png'
}

function changeArrowColorOnMouseOut(whichArrow){
    const btn = document.querySelector(`.slider-arrow-${whichArrow}`)
    btn.src = 'assets/arrow-black.png'
}

