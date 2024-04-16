import { readFileSync } from 'fs';

const data = readFileSync('data.txt', 'utf8');

function calcArea(l, w, h) {
    return 2*l*w + 2*w*h + 2*h*l;
}

function smallestSideArea(l, w, h) {
    var orderedSides = [l, w, h].sort((a, b) => a - b);
    return orderedSides[0] * orderedSides[1];
}

function calcPaperNeeded(l, w, h) {
    return calcArea(l, w, h) + smallestSideArea(l, w, h);
}

console.log("Test input, [2, 3, 4] (expect 58): ", calcPaperNeeded(2, 3, 4));