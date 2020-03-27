document.body.style.height = "10000px";

const div = document.createElement("div");
document.body.appendChild(div);

let height = 10;
let color = "red"
let grow = true;


div.style.width = "100%";

div.style.position = "fixed";
div.style.textAlign = "center";


document.addEventListener("scroll", () => {
    if (grow) {
        height += 5;
        color = "red";
        div.style.fontSize = height + "px";
        if (height % 4 == 0) {
            div.innerText = "DUPA";
        } else {
            div.innerText = "";
        }

    } else {
        height -= 5;
        color = "green";
        div.style.fontSize = height + "px";
        if (height % 4 == 0) {
            div.innerText = "DUPA";
        } else {
            div.innerText = "";
        }
    }


    div.style.height = height + "px";
    div.style.background = color;
    console.log("dupa");

    if (height >= 500) {
        grow = false;
    }
    if (height == 0) {
        grow = true;
    }
})