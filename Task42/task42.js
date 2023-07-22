"use strict";
{
    function showMagicians(magicians) {
        for (let magician of magicians) {
            console.log(magician);
        }
    }
    function makeGreat(magicians) {
        for (let i = 0; i < magicians.length; i++) {
            magicians[i] += " the Great";
        }
    }
    // Create an array of magician's names
    const Magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
    // Call the makeGreat function to modify the magicians array
    makeGreat(Magicians);
    showMagicians(Magicians);
}
