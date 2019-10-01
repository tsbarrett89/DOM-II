// Your code goes here
const bottomTitles = document.querySelector('.destination h4');
const bottomBoxes = document.querySelector('.destination p');
bottomTitles.addEventListener('click', (event) => {
    if (bottomBoxes.style.display === 'block'){
        bottomBoxes.style.display = 'none';
    } else if (bottomBoxes.style.display === 'none'){
        bottomBoxes.style.display === 'block';
    }

    console.log('clicked')
});


const bottomButtons = document.querySelectorAll('.destination .btn');
bottomButtons.forEach(button => button.addEventListener('click', () => {
    button.style.backgroundColor = 'red';
}))