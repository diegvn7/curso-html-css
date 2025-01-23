const btnRight = document.querySelector('.button-arrow.-right')
const btnLeft = document.querySelector('.button-arrow.-left')
const elements = document.querySelector('.elements')
let pixels = 0

btnRight.addEventListener('click', function() {
    pixels = pixels - 80
    elements.style = `transform: translate(${pixels}px)`
});

btnLeft.addEventListener('click', function() {
    pixels = pixels + 80
    elements.style = `transform: translate(${pixels}px)`
});
