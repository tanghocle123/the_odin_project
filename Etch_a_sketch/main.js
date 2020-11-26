

function makeGrid(value=50) {
    let grids = document.querySelector(".grids");
    for(let i=0;i<value;i++) {
        let row = document.createElement("div");
        row.className = "gridRow";
        for(let j=0;j<value;j++) {
            console.log("YES");
            let grid = document.createElement("div");
            grid.className="grid";
            row.appendChild(grid);
        }
        grids.appendChild(row);
    }
}

function init() {
    const grid = document.querySelectorAll(".grid");

    // THIS CALLBACK FUNCTION ACTS AS THE "handleEvent()" method and must have these requirements
    //  the callback accepts a single parameter: an object based on Event describing the event that has occurred, and it returns nothing.
    let listener = function addClass(event) {
        event.target.classList.add("color");
    }
    
    // When user click down a mouse, enables them to draw
    document.addEventListener("mousedown", () => {
        grid.forEach(eachGrid => {
            
            eachGrid.addEventListener("mouseenter", listener);
        });
    });
    
    // When user finishes clicking down, disables them to draw
    document.addEventListener("mouseup", () => {
        grid.forEach(eachGrid => {
            eachGrid.removeEventListener("mouseenter", listener);
        });
    });
    
    let resetBtn = document.querySelector(".btn-reset");
    resetBtn.addEventListener("click", () => {
        grid.forEach(eachGrid => {
            eachGrid.classList.remove("color");
        });
    });
}
makeGrid(30);
init();





let input = document.querySelector(".btn-pick-value");
input.addEventListener("click", ()=> {
    let i = prompt("Enter your value of squares",50);
    let gridRows = document.querySelectorAll(".gridRow");
    gridRows.forEach(row => {
        row.remove();
    });
    makeGrid(i);
    init();
})
