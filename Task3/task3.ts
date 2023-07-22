let personname: string = "Sheeza Nasar";

// Lowercase
let lowercasename: string = personname.toLowerCase();
console.log("Lowercase:", lowercasename);

// Uppercase
let uppercasename: string = personname.toUpperCase();
console.log("Uppercase:", uppercasename);

// Titlecase
function toTitleCase(name: string): string {
  return name.toLowerCase().replace(/(?:^|\s)\w/g, (match) => {
    return match.toUpperCase();
  });
}

let titlecasename: string = toTitleCase(personname);
console.log("Titlecase:", titlecasename);