"use strict";
let guests = ["Anam", "Jiya", "Laiqa"];
let unabletoAttend = guests[1];
console.log(`${unabletoAttend} is unable to attend the dinner.`);
guests[1] = "Kanza";
// Print a second set of invitation messages
for (let i = 0; i < guests.length; i++) {
    let guest = guests[i];
    console.log(`Dear ${guest}, you are cordially invited to a dinner at my place. It would be an honor to have you as my guest.`);
}
console.log("Good news! We found a bigger dinner table.");
// Add one guest to the beginning of the array
guests.unshift("Maria");
// Add one guest to the middle of the array
guests.splice(Math.floor(guests.length / 2), 0, "Taliya");
// Add one guest to the end of the array using append()
guests.push("Adam");
// Print a new set of invitation messages
for (let i = 0; i < guests.length; i++) {
    let guest = guests[i];
    console.log(`Dear ${guest}, you are cordially invited to a dinner at my place. It would be an honor to have you as my guest.`);
}
