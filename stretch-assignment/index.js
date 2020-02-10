const body = document.querySelector('body')
const order = document.querySelector('.blocks');
const blocks = document.querySelectorAll('.blocks .block');
const block = document.getElementsByClassName('block')
const blockRed = document.getElementsByClassName('block--red');
const blockBlue = document.getElementsByClassName('block--blue');
const blockGreen = document.getElementsByClassName('block--green')
const blockPink = document.getElementsByClassName('block--pink')
const blockGray = document.getElementsByClassName('block--gray')



blockRed[0].addEventListener('mousedown', () => {
    blockRed[0].style.transform = 'translateX(110vw)';
    blockRed[0].style.transition = 'all 1s'
});

blockBlue[0].addEventListener('mousedown', () => {
    blockBlue[0].style.transform = 'translateX(110vw)';
    blockBlue[0].style.transition = 'all 1s'
});

blockGreen[0].addEventListener('mousedown', () => {
    blockGreen[0].style.transform = 'translateX(110vw)';
    blockGreen[0].style.transition = 'all 1s'
});

blockPink[0].addEventListener('mousedown', () => {
    blockPink[0].style.transform = 'translateX(110vw)';
    blockPink[0].style.transition = 'all 3s'
});

blockGray[0].addEventListener('mousedown', () => {
    blockGray[0].style.transform = 'translateX(110vw)';
    blockGray[0].style.transition = 'all 1s'
});

body.addEventListener('mouseup', () => {
    blocks.forEach(block => {
        block.style.transform = 'translateX(0px)'
    })
});

blocks.forEach(block => block.addEventListener('click', () => {
    blocks.forEach(block => block.style.order = (block.style.order + 1));
    block.style.order = 0; 
}));

order.style.position = 'relative';