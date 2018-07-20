var monthNames = function () {
    let monthNames = [
        "January",
        "February",
        "Mars",
        "April",
        "May",
        "June",
        "Juli",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    let beef = function () {
        return "BEEF!";
    }

    return {
        number : (number) => { return monthNames[number]; },
        name : (name) => { return monthNames[monthNames.indexOf(name)]; },
        beef : () => { return beef(); }
    };
}();

let one = monthNames.number(0);
let two = monthNames.name("February");
let three = monthNames.name("cheese");
let beef = monthNames.beef();
