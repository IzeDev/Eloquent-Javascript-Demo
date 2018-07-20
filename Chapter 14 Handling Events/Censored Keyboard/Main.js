let forbiddenCharacter = ["Q", "W", "X"];
function main() {
    let textbox = document.getElementById("textbox1");
    textbox.addEventListener("keypress", keypressEventCensorship)
}

function keypressEventCensorship(event) {
    let char = String.fromCharCode(event.charCode).toUpperCase();
    if (forbiddenCharacter.includes(char)) {
        event.preventDefault();
    }
}