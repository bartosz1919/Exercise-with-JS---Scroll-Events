document.body.style.height = "10000px";

const div = document.createElement("div");
document.body.appendChild(div);

div.style.height = "10px";
div.style.width = "100%";
div.style.background = "green";



document.addEventListener("scroll", () => {
    console.log("dupa");
})