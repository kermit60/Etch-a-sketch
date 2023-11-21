const grid = document.querySelector('.grid');
const HEIGHT = 700;
const resetBut = document.querySelector('.reset');

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
        cell.setAttribute('style', `height: ${HEIGHT/numDiv - 2}px; width: ${HEIGHT/numDiv - 2}px`);
        cell.addEventListener('mouseover', () =>{
            cell.style.backgroundColor = 'black';
        });
    })
}

resetBut.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
        
    })
});

createDivs(15);
