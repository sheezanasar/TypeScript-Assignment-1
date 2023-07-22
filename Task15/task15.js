"use strict";
let dinnerguests = ["Anam", "Jiya", "Laiqa"];
let unableToAttend = dinnerguests[1]; // Guest at index 1 can't make it
console.log(`${unableToAttend} is unable to attend the dinner.`);
// Replace the guest who can't make it with a new person
dinnerguests[1] = "Kanza";
// Print a second set of invitation messages
for (let i = 0; i < dinnerguests.length; i++) {
    let guest = dinnerguests[i];
    console.log(`Dear ${guest}, you are cordially invited to a dinner at my place. It would be an honor to have you as my guest.`);
}
