let names = ["Adam", "Jimmy", "Mirre", "Isa", "Isabella"];
let textbox;
let dropdown;
function log(message) {
    let currentdate = new Date();
    let datetime = currentdate.getHours().toLocaleString("sv-se") + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds() + "-"
        + currentdate.getMilliseconds();
    console.log(message + " " + datetime);
}
function getNameMatches(input) {
    log("getNameMatches");
    input = input.trim() === "" ? null : input;
    if (input == null || names.length < 1) {
        return [];
    }
    return names.filter(name => name.toLocaleLowerCase().startsWith(input.toLocaleLowerCase()));
}
function addMatchesToDropdown(matches) {
    log("addMatchesToDropdown");
    for (let index = 0; index < matches.length; index++) {
        let option = document.createElement("option");
        option.text = matches[index];
        dropdown.add(option, null);
        option.addEventListener("click", onSelectionChange);
    }
}
function toggleDropdown(doShow, size = null) {
    log("toggleDropdown");
    if (doShow) {
        dropdown.style.display = "block";
        dropdown.size = size;
    }
    else {
        dropdown.style.display = "none";
        dropdown.innerHTML = "";
    }
}
function newInput(event) {
    log("newInput");
    if (textbox.value == textbox) {
    }
    textbox.dataset.value = "";
    toggleDropdown(false);
    let matches = getNameMatches(textbox.value);
    if (matches.length > 0) {
        addMatchesToDropdown(matches);
        toggleDropdown(true, matches.length);
    }
    else {
        toggleDropdown(false);
    }
}
function onSelectionChange(event) {
    log("onSelectionChange");
    textbox.value = dropdown.value;
    textbox.dataset.value = dropdown.value;
    toggleDropdown(false);
}
function onTextboxBlur(event) {
    log("onTextboxBlur");
    if (textbox.dataset.value === "" && event.relatedTarget != dropdown) {
        textbox.value = null;
        toggleDropdown(false);
    }
}
function main() {
    textbox = document.querySelector("#textboxinput");
    textbox.dataset.value = "";
    textbox.addEventListener("keyup", newInput);
    textbox.addEventListener("blur", onTextboxBlur);
    dropdown = document.querySelector("#textboxdropdown");
    dropdown.addEventListener("change", onSelectionChange);
}
