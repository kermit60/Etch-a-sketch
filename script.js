const HEIGHT = 675;
const grid = document.querySelector('.grid');
const resetBut = document.querySelector('.reset');
const changeColorBut = document.querySelector('.change-color');
const rainbow = document.querySelector('.rainbow');
const erase = document.querySelector('.erase');
const sizeChange = document.querySelector('.size');
let color = 'black';
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
            cell.style.backgroundColor = color;
        });

        cell.addEventListener('mousemove', () => {
            if (isDown) {
                if (rainbowActive) {
                    rainbowColor()
                }
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
const colour = document.querySelector('#color-picker');
colour.addEventListener('input', (e) => {
    rainbowActive = false;
    color = e.target.value;
});

changeColorBut.addEventListener('click', () => {
    rainbowActive = false;
    color = document.querySelector('#color-picker').value;
});

// making the erase function
erase.addEventListener('click', ()=> {
    rainbowActive = false;
    color = 'white';
});

sizeChange.addEventListener('click', () => {
    let size = parseInt(prompt("Please enter grid-size: 16-100"));
    rainbowActive = false;
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    createDivs(size)
});

let rainbowActive = false;
function rainbowColor() {
    rainbowActive = true;
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    color = `rgb(${randomR}, ${randomG}, ${randomB})`
}

rainbow.addEventListener('click', () => {
    rainbowColor();
});

// enhance the design and code refactoring


// default size
createDivs(16);
