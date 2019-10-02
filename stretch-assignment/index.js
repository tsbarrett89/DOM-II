const order = document.querySelector('.blocks');
const blocks = document.querySelectorAll('.blocks .block');

blocks.forEach(block => block.addEventListener('click', () => {
    blocks.forEach(block => block.style.order = (block.style.order + 1));
    block.style.order = 0; 
}));

order.style.position = 'relative';


// blocks.forEach(block => block.addEventListener('mousedown', () => {
//     block.style.position = 'relative';
    
//     function blastOff (){
//         var pos = 0;
//         pos++;
//         block.style.left = `${pos}px`;
//     };
//     setInterval(blastOff, 5);
    
// }));

// blocks.forEach(block => block.addEventListener('mouseup', () => {
//     block.style.position = 'static';
//     block.style.left = '0px';
// }))


// blocks.forEach(block => block.addEventListener('mousedown', () => {
//     TweenMax.to(".block", 10, {x:800})
// }));

// blocks.forEach(block => block.addEventListener('mouseup', () => {
//     TweenMax.from(".block", 10, {x:800})
// }));

blocks[0].addEventListener('mousedown', () => {
    TweenMax.to("blocks", 10, {x:800})
});