"use strict";
function makeSandwich(...items) {
    console.log(`Making a sandwich with ${items.join(', ')}.`);
}
makeSandwich('ham', 'cheese', 'lettuce');
makeSandwich('turkey', 'bacon', 'avocado');
makeSandwich('peanut butter', 'jelly');
