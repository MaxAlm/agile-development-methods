// Global variables
var clicked = false;

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
    var error = false;
    var errorText = document.getElementById("error");
    var name = document.forms["contactForm"]["name"];
    var mail = document.forms["contactForm"]["mail"];
    var message = document.forms["contactForm"]["message"];
    var submit = document.forms["contactForm"]["submit"];

    if (!clicked) {
        // Toggle clicked
        clicked = true;

        // Clear error message
        errorText.innerHTML = "";

        // Create errorCount variable
        var errorCount = 0;

        // Check if user entered name
        if (name.value == "") {
            errorText.innerHTML = "▸ Namn fältet är tomt";
            errorCount++;
            error = true;
        }

        // Check if user entered email correctly
        if (mail.value == "") {
            // If previous error exists, <br>
            if (error) {
                errorText.innerHTML += '<br>';
            } else {
                error = true;
            }
            
            errorText.innerHTML += "▸ Email fältet är tomt";
            errorCount++;
        }
        else {
            const arr = ["@", "."];

            for (let i = 0; i < arr.length; i++) {
                // Check if email includes @ and .
                if (!mail.value.includes(arr[i])) {
                    // If previous error exists, <br>
                    if (error) {
                        errorText.innerHTML += '<br>';
                    } else {
                        error = true;
                    }
                    
                    errorText.innerHTML += "▸ Ogiltig email";
                    errorCount++;
                    break;
                }
            }
        }

        // Check if user entered a message
        if (message.value == "") {
            // If previous error exists, <br>
            if (error) {
                errorText.innerHTML += '<br>';
            } else {
                error = true;
            }
            
            errorText.innerHTML += "▸ Meddelande fältet är tomt";
            errorCount++;
        }

        // Set error message size
        switch (errorCount) {
            case 1:
                errorText.style.height = "23px";
                break;

            case 2:
                errorText.style.height = "48px";
                break;

            case 3:
                errorText.style.height = "73px";
                break;
        }

        // If all info was entered correctly, tell user message is being sent and redirect
        if (!error) {
            document.getElementById("sending-text").innerHTML = "Skickar...";
            name.disabled = true;
            mail.disabled = true;
            message.disabled = true;
            submit.disabled = true;

            // Redirect user after 2 seconds
            setTimeout(function() {
                window.location.href = "tack.html";
            }, 2000);
        } else {
            errorText.className = "error-anim";
            
            setTimeout(function() {
                errorText.className = "";
                errorText.style.height = "0px";
                clicked = false;
            }, 3000);
        }
    }
}
