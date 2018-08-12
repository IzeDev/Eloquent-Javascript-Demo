let names = ["Adam", "Jimmy", "Mirre", "Isa"];
let textbox;
let dropdown;


function getNameMatches(input) {
    let matches = names.filter(name => name.toLowerCase().startsWith(input.toLowerCase()));
    return matches;
}

function showMatches(matches)
{
    for (let index = 0; index < matches.length; index++) {
        let option = document.createElement("option");
        option.text = matches[index];
        dropdown.add(option, null);
    }
}

function newInput(event) {
    debugger;
    let matches = getNameMatches(textbox.value);
    showMatches(matches);        
}

function main() {
    // textbox = new HTMLTextAreaElement();
    textbox = document.querySelector("#textboxinput");
    dropdown = document.querySelector("#textboxdropdown");

    textbox.addEventListener("keyup", newInput);
}


