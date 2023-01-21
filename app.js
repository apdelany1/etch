const container = document.querySelector(".container");

for (let i = 0; i < 5; i++) {
    let row = document.createElement("div")
    row.classList.add("box");
    container.append(row)
    for (let i = 0; i < 5; i++) {
        let innerrow = document.createElement("div")
        innerrow.classList.add("cell")
        row.append(innerrow)
    }
}





