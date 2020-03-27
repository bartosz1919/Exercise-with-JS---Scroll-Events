document.body.style.height = "10000px";

const div = document.createElement("div");
document.body.appendChild(div);

let height = 10;
let color = "red"
let grow = true;


div.style.width = "100%";
div.style.background = color;
div.style.position = "fixed";



document.addEventListener("scroll", () => {
    if (height < 150) {
        height++;
    } else {

    }


    div.style.height = height + "px";
    console.log("dupa");

    if (height >= 150) {
        grow = false;
    }
})