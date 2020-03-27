document.body.style.height = "10000px";

const div = document.createElement("div");
document.body.appendChild(div);

let height = 10;
let color = "red"
let grow = true;


div.style.width = "100%";

div.style.position = "fixed";



document.addEventListener("scroll", () => {
    if (grow) {
        height++;
        color = "red";
    } else {
        height--;
        color = "green";
    }


    div.style.height = height + "px";
    div.style.background = color;
    console.log("dupa");

    if (height >= 150) {
        grow = false;
    }
    if (height == 0) {
        grow = true;
    }
})