

// Container for the grid divs reference
const grid_container=document.querySelector('.grid_container');

// Reset Button reference
const reset_button=document.querySelector('.reset_button');



// Adding sixteen divs to the container div to make the grid.
make_grid(16);

const allGrids=document.querySelectorAll('.grid_section');


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
