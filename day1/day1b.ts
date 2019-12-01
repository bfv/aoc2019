

import { input } from './input';

function calcFuel(mass: number): number {

    if (mass <= 0) {
        return 0;
    }

    let fuel = Math.floor(mass / 3) - 2;
    fuel = (fuel < 0 ? 0 : fuel);

    return fuel + calcFuel(fuel);
}


let answer = 0;
for (let i = 0; i < input.length; i++) {
    answer += calcFuel(input[i]);
}

console.log('day 1b:', answer);
