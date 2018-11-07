
function firstbutton() {
    document.getElementById("console");
    console.log("Hello, World!");
}
function secondbutton() {
    document.getElementById("window");
    window.alert("Hello, World!");
}
function thirdbutton() {
    var p = document.getElementById("browser")
    p.innerHTML = "Hello, World!";
}
function fourthbutton() {
    document.getElementById("prompt");
    window.prompt("Full Name")
    window.alert("Hello, World!")
}
