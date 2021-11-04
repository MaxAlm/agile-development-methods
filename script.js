function showMenu() {
    var mb = document.getElementById("menu-bar");
    
    if (mb.className == "menu-bar-closed") {
        mb.className = "menu-bar-open";
        document.getElementById("menu-button").style.transform = "rotate(180deg)"
    } else {
        mb.className = "menu-bar-closed";
        document.getElementById("menu-button").style.transform = "rotate(0deg)"
    }
}

function submitForm() {
    alert("Skickar mail!");
}
