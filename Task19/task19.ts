let dinnerguest = ["Anam", "Jiya", "Laiqa"];
let unabletoattend = dinnerguest[1]; 
console.log(`${unabletoattend} is unable to attend the dinner.`);
dinnerguest[1] = "Kanza";
for (let i = 0; i < dinnerguest.length; i++) {
  console.log(`Dear ${dinnerguest[i]}, you are cordially invited to a dinner at my place. It would be an honor to have you as my guest.`);
}
console.log(`Number of people invited to dinner: ${dinnerguest.length}`);
