import { readFileSync } from 'fs';

// Read the contents of the file synchronously
const data = readFileSync('data.txt', 'utf8');

const key = new Map([
    ["(", 1],
    [")", -1]
])

console.log("The elevator has ", data.length, "instructions");

var pos = 0;
var firstSubterrainian = 0;
var i = 0;

for (const instruction of data) {
    pos += key.get(instruction);
    i += 1;
    
    if (pos === -1 && firstSubterrainian === 0) {
        firstSubterrainian = i;
    }
}

console.log("Finished at floor ", pos);
console.log("First entered the basement at instruction ", firstSubterrainian);
