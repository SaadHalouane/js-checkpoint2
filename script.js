var colorbox = document.getElementById("colorbox")

console.log("trdt",colorbox)

document.addEventListener("DOMContentLoaded", change)
function change(){
    var changecolorbtn = document.getElementById("changecolorbtn"); 
    changecolorbtn.addEventListener("click", getRandomColor)
    console.log("working fine",changecolorbtn)
    }

    function getRandomColor(){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        console.log("testt" , r, b, g , `rgb(${r}, ${g}, ${b}) !important`)
    colorbox.style.backgroundColor = `rgb(${r}, ${g}, ${b}) !important`
}
