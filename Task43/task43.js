"use strict";
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians) {
    let greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}
let themagicians = ['David Copperfield', 'Harry Houdini', 'Penn & Teller'];
let greatMagicians = makeGreat(themagicians);
console.log('Original themagicians:');
showMagicians(themagicians);
console.log('Great magicians:');
showMagicians(greatMagicians);
