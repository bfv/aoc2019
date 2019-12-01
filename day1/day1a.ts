

import { input } from './input';

function calcFuel(mass: number): number {
    return Math.floor(mass / 3) - 2;
}

let answer = 0;
for (let i = 0; i < input.length; i++) {
    answer += calcFuel(input[i]);
}

console.log('day 1a:', answer);
