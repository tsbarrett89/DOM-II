// Your code goes here
const bottomTitles = document.querySelectorAll('.destination h4');

// bottomTitles.forEach((header) => {
//     const bottomBoxes = this.nextSibling;
//     header.addEventListener('click', () => {
//         if (bottomBoxes.style.display === 'block'){
//         bottomBoxes.style.display = 'none';
//     } else if (bottomBoxes.style.display === 'none'){
//         bottomBoxes.style.display === 'block';
//     }

//     console.log('clicked');
//     })

// });




// // const bottomBoxes = document.querySelector('.destination p');
// // bottomTitles.addEventListener('click', (event) => {
    

// //     console.log('clicked')
// // });


const bottomButtons = document.querySelectorAll('.destination .btn');
bottomButtons.forEach(button => button.addEventListener('click', () => {
    button.style.backgroundColor = 'red';
}))

const topImage = document.querySelector('header img');
topImage.addEventListener('mouseenter', () => {
    topImage.style.transform = 'scale(0.8)';
})
topImage.addEventListener('mouseleave', () => {
    topImage.style.transform = 'scale(1.0)'
})

const navBar = document.querySelector('nav');
navBar.addEventListener('mouseenter', () => {
    navBar.style.flexDirection = 'row-reverse';
})
navBar.addEventListener('mouseleave', () => {
    navBar.style.flexDirection = 'row'
})

const changeHeaders = document.querySelectorAll('.text-content h2')
changeHeaders[0].addEventListener('mouseenter', () => {
    changeHeaders[0].textContent = `Let's Wait`;
})
changeHeaders[0].addEventListener('mouseleave', () => {
    changeHeaders[0].textContent = `Let's Go!`
})

changeHeaders[1].addEventListener('mouseenter', () => {
    changeHeaders[1].textContent = `Boredom Awaits:(`;
})
changeHeaders[1].addEventListener('mouseleave', () => {
    changeHeaders[1].textContent = `Adventure Awaits`
})