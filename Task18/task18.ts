let placestoVisit = ["Hagia Sophia", "Topkapi Palace", "Eiffel Tower", "Pyramids of Giza", "Rome"];
console.log("Original Order:", placestoVisit);
// Print array in alphabetical order without modifying the original list
console.log("Alphabetical Order:", [...placestoVisit].sort());
// Show that the array is still in its original order
console.log("Original Order:", placestoVisit);
// Print array in reverse alphabetical order without modifying the original list
console.log("Reverse Alphabetical Order:", [...placestoVisit].sort().reverse());
// Show that the array is still in its original order
console.log("Original Order:", placestoVisit);
// Reverse the order of the list
placestoVisit.reverse();
console.log("Reversed Order:", placestoVisit);
// Reverse the order of the list again
placestoVisit.reverse();
console.log("Original Order:", placestoVisit);
// Sort the array in alphabetical order
placestoVisit.sort();
console.log("Alphabetical Order:", placestoVisit);
// Sort the array in reverse alphabetical order
placestoVisit.sort((a, b) => b.localeCompare(a));
console.log("Reverse Alphabetical Order:", placestoVisit);