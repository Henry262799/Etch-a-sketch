

// Container for the grid divs reference
const grid_container=document.querySelector('.grid_container');

// Reset Button reference
const reset_button=document.querySelector('.reset_button');

//Grid-size Button References
const grid_button=document.querySelector('.grid_size');


// Adding sixteen divs to the container div to make the grid.
make_grid(16);

let allGrids=document.querySelectorAll('.grid_section');


//window.addEventListener('mouseover', stopPropagation());


//Event listeners for the grid

//Event listener for each individual grid element.
allGrids.forEach(grid =>{
    grid.addEventListener('mouseover', e => {
        grid.classList.add('grid_section_hovered');
    })
})

// Event listener for the reset button.

reset_button.addEventListener('click', e=>{
    removeColors(allGrids);
})

// Event listener for grid size Button

grid_button.addEventListener('click', e=>{
    executeGridSizeChange();
})



/**
 * This function creates the number of boxes for the grid.
 * @param {Numher} size 
 */
function make_grid(size){
    
    for(let i=0;i<size*size;i++){
        const grid_section=document.createElement('div');
        grid_section.setAttribute('class', 'grid_section');
        grid_container.appendChild(grid_section);
    }
}


/**
 * This method resets the grid back to its original state being empty.
 * @param {NodeList} grid_list 
 */
function removeColors(grid_list){

    grid_list.forEach(grid=>{
        grid.classList='grid_section';
    })
}


function removeElements(){
    //console.log(grid_container.children)
    grid_container.innerHTML='';
}

//removeElements();

/**
 * Changes the grid size based on the size input
 * @param {Number} size 
 */
function changeGridSize(size){
    
    //grid_container.style.gridTemplateColumns="repeat(size,1fr)";
    //grid_container.style.gridTemplateRows="repeat(size,1fr)";
    grid_container.style.setProperty('grid-template-columns', 'repeat(' + size + ', 1fr)')
    grid_container.style.setProperty('grid-template-rows', 'repeat(' + size + ', 1fr)')

    for(let i=0;i<size*size;i++){
        const grid_section=document.createElement('div');
        grid_section.setAttribute('class', 'grid_section');
        grid_container.appendChild(grid_section);
    }
}

/**
 * This function returns a number for the grid size given by the user
 */
function askUserForGridSize(){
    let input = parseInt(prompt('Please choose a grid size below 64'));
    //console.log(typeof(input));
    //console.log(input);
    if(Object.is(input,NaN)){
        askUserForGridSize();
    }
    if(typeof(input)!== 'number'){
        askUserForGridSize();
    }

    if(input>64){
        askUserForGridSize();
    }

    return input;
}

function executeGridSizeChange(){
    let num=askUserForGridSize();
    removeElements();
    changeGridSize(num);
    addHoverClass();
    //console.log(grid_container.gridTemplateColumns);
}

function addHoverClass(){
     allGrids=document.querySelectorAll('.grid_section');

    allGrids.forEach(grid =>{
        grid.addEventListener('mouseover', e => {
            grid.classList.add('grid_section_hovered');
        })
    })
}

