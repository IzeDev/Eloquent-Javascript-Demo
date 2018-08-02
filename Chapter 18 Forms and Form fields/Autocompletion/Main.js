let names = ["Adam", "Jimmy", "Mirre", "Isa"];

function main() {
    let textbox = document.querySelector("#textboxinput");
    let dropdown = document.querySelector("#textboxdropdown");

    for (let index = 0; index < names.length; index++) {
        let option = document.createElement("option");
        option.text = names[index];
        dropdown.add(option, null);
    }
}


