function showMagicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    return greatMagicians;
}

let themagicians: string[] = ['David Copperfield', 'Harry Houdini', 'Penn & Teller'];
let greatMagicians: string[] = makeGreat(themagicians);

console.log('Original themagicians:');
showMagicians(themagicians);

console.log('Great magicians:');
showMagicians(greatMagicians);