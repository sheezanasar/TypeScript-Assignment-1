"use strict";
function makeShirt(size = "Large", message = "I love TypeScript") {
    console.log(`A ${size} shirt will be made with the message: '${message}'.`);
}
makeShirt(); // Large shirt with default message
makeShirt(undefined, "Hello, World!"); // Large shirt with custom message
makeShirt("Medium"); // Medium shirt with default message
makeShirt("Small", "I love coding!"); // Custom size shirt with custom message
