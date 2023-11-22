const HEIGHT = 700;
const grid = document.querySelector('.grid');
const resetBut = document.querySelector('.reset');
const changeColorBut = document.querySelector('.change-color');
const erase = document.querySelector('.erase');
const sizeChange = document.querySelector('.size');
let color = 'black';
color = document.querySelector('input').value;
let isDown = false;


// creating the grid of the etch-a-sketch
let createDivs = numDiv => {
    for (let i = 0; i < numDiv; ++i) {
        row = document.createElement('div')
        for (let j = 0; j < numDiv; ++j) {
            let cell = document.createElement('div');
            cell.setAttribute('class', "cell");
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
    // updating the size of each cell based on the number of cells needed
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.setAttribute('style', `height: ${HEIGHT/numDiv}px; width: ${HEIGHT/numDiv}px`);
        
        cell.addEventListener('mousedown', () => {
            isDown = true;
        });

        cell.addEventListener('mousemove', () => {
            if (isDown) {
                cell.style.backgroundColor = color;
            }
        });

        cell.addEventListener('mouseup', () => {
            if (isDown) {
                isDown = false;
            }
        });
        
    })
}

// resetting the grid 
resetBut.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
        
    })
});
// changing the color of the paint
changeColorBut.addEventListener('click', () => {
    color = document.querySelector('input').value;
});

// making the erase function
erase.addEventListener('click', ()=> {
    color = 'white';
});

sizeChange.addEventListener('click', () => {
    let size = parseInt(prompt("Please enter grid-size: 16-100"));
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    createDivs(size)
});

// needs to do:
// change color of the colouring paint completed
// hover and mousedown painting


createDivs(16);
