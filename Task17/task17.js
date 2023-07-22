"use strict";
let dinnerGuest = ["Jiya", "Anam", "Laiqa", "Taliya", "Kanza", "Adam"];
console.log("Due to unforeseen circumstances, we can only invite two people for dinner.");
while (dinnerGuest.length > 2) {
    let removedGuest = dinnerGuest.pop();
    console.log(`Sorry, ${removedGuest}, we won't be able to invite you to dinner.`);
}
for (let i = 0; i < dinnerGuest.length; i++) {
    console.log(`Dear ${dinnerGuest[i]}, you are still invited to a dinner at my place. It would be an honor to have you as my guest.`);
}
dinnerGuest.splice(0, dinnerGuest.length);
console.log("dinnerGuest list:", dinnerGuest);
