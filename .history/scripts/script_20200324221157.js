document.body.style.height = "10000px";

const div = document.createElement("div");
document.body.appendChild(div);

let wysokosc = 10;


div.style.height = wysokosc + "px";
div.style.width = "100%";
div.style.background = "green";



document.addEventListener("scroll", () => {


    console.log("dupa");
})