function showMenu() {
    let mb = document.getElementById("menu-bar");
    
    if (mb.className == "menu-bar-closed") {
        mb.className = "menu-bar-open";
        document.getElementById("menu-button").style.transform = "rotate(180deg)"
    } else {
        mb.className = "menu-bar-closed";
        document.getElementById("menu-button").style.transform = "rotate(0deg)"
    }
}

function submitForm() {
    let name = document.forms["contactForm"]["name"];
    let mail = document.forms["contactForm"]["mail"];
    let message = document.forms["contactForm"]["message"];
    let submit = document.forms["contactForm"]["submit"];

    // Disable input fields
    name.disabled = true;
    mail.disabled = true;
    message.disabled = true;
    submit.disabled = true;

    // Show sending text and set redirecting timerout
    document.getElementById("sending-text").innerHTML = "Skickar...";

    setTimeout(function() {
        window.location.href = "tack.html";
    }, 2000);

    // Return false to prevent form reset
    return false;
}