"use strict";
let personname = "Sheeza Nasar";
// Lowercase
let lowercasename = personname.toLowerCase();
console.log("Lowercase:", lowercasename);
// Uppercase
let uppercasename = personname.toUpperCase();
console.log("Uppercase:", uppercasename);
// Titlecase
function toTitleCase(name) {
    return name.toLowerCase().replace(/(?:^|\s)\w/g, (match) => {
        return match.toUpperCase();
    });
}
let titlecasename = toTitleCase(personname);
console.log("Titlecase:", titlecasename);
