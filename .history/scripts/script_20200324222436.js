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
        height += 20;
        color = "red";
    } else {
        height += 20;
        color = "green";
    }


    div.style.height = height + "px";
    div.style.background = color;
    console.log("dupa");

    if (height >= 200) {
        grow = false;
    }
    if (height == 0) {
        grow = true;
    }
})