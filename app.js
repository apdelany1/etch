// point to the container so we can reference it later
const container = document.querySelector(".container");
let squares;
draw()

function draw(number = 16) {

    const xbyx = document.querySelector("h2")
    xbyx.innerText = `${number}x${number}`;
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
}



let but = document.querySelector(".but");
but.addEventListener("click", () => {
    let clear = document.querySelectorAll(".cell")
    clear.forEach((div) => {
        div.classList.remove("fill")
    })
});

let butt = document.querySelector(".butO");
butt.addEventListener("click", () => {
    squares = prompt("How many squares per side?")
    container.innerHTML = "";
    draw(squares);
});




