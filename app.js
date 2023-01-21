// point to the container so we can reference it later
const container = document.querySelector(".container");

// start a for loop creating rows, we will then add cells within the row. 
for (let i = 0; i < 30; i++) {
    let row = document.createElement("div")
    row.classList.add("box");
    container.append(row)

    // this loop will fill in the row we just appened with equal amounts of cells as there are rows
    for (let i = 0; i < 30; i++) {
        let innerrow = document.createElement("div")
        innerrow.classList.add("cell")
        row.append(innerrow)
    }
}

// point to each sell with qSelectoAll
const hov = document.querySelectorAll(".cell");

// add event listener using forEach
// hover for CPU
hov.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.classList.add("fill")

        setTimeout(() => {
            div.classList.add("fillBlue");
        },2000);
    });
});

// clicks for mobile
hov.forEach((div) => {
    div.addEventListener('click', () => {
        div.classList.add("fill")
    });
});






