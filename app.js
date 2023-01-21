// point to the container so we can reference it later
const container = document.querySelector(".container");
let squares;
draw()
// // start a for loop creating rows, we will then add cells within the row. 
// for (let i = 0; i < squares; i++) {
//     let row = document.createElement("div")
//     row.classList.add("box");
//     container.append(row)

//     // this loop will fill in the row we just appened with equal amounts of cells as there are rows
//     for (let i = 0; i < squares; i++) {
//         let innerrow = document.createElement("div")
//         innerrow.classList.add("cell")
//         row.append(innerrow)
//     }
// }

function draw(number = 16) {
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
}


// point to each cell with qSelectoAll
let hov = document.querySelectorAll(".cell");

// add event listener using forEach
// hover for CPU
hov.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.classList.add("fill")
        console.log("work")
        // setTimeout(() => {
        //     div.classList.add("fillBlue");
        // },2000);
    });
});






let but = document.querySelector(".but");
but.addEventListener("click", () => {
    let clear = document.querySelectorAll(".cell")
    clear.forEach((div) => {
        div.classList.remove("fill")
    })
    squares = prompt("How many squares");
    drawOnReset(squares)
});




