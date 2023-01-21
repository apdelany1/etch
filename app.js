// point to the container so we can reference it later
const container = document.querySelector(".container");

//call function to draw default of 16x16
draw()

function draw(number = 16) {

    const xbyx = document.querySelector("h2")
    xbyx.innerText = `${number}x${number}`;

    // this loop will add in rows, then we will fill rows with boxes
    for (let i = 0; i < number; i++) {
        let row = document.createElement("div")
        row.classList.add("box");
        container.append(row)
    
        // this loop will fill in the row we just appened with equal amounts of cells as there are rows
        for (let i = 0; i < number; i++) {
            let innerrow = document.createElement("div")
            innerrow.classList.add("cell")
            row.append(innerrow)
        }
    }
    // point to each cell with qSelectoAll
    let hov = document.querySelectorAll(".cell");

    // add event listener using forEach
    hov.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.classList.add("fill")
            console.log("work")
            //optional trail
            // setTimeout(() => {
            //     div.classList.add("fillBlue");
            // },2000);
        });
    });
}


//button to clear grid of all filled boxes
let but = document.querySelector(".but");
but.addEventListener("click", () => {
    let clear = document.querySelectorAll(".cell")
    clear.forEach((div) => {
        div.classList.remove("fill")
    })
});

//button to update the number of boxes per side, then call draw function, this time with new number. 
let butt = document.querySelector(".butO");
butt.addEventListener("click", () => {
    let squares = prompt("How many squares per side?")
    container.innerHTML = "";
    draw(squares);
});




