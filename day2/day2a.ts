
import { input } from './input';

let memory: number[];

function add(position: number) {
    memory[memory[position + 3]] = memory[memory[position + 1]] + memory[memory[position + 2]];
}

function multiply(position: number) {
    memory[memory[position + 3]] = memory[memory[position + 1]] * memory[memory[position + 2]];
}

function executeOpcode(position: number) {

    const opcode = memory[position];
    switch(opcode) {
        case 1:
            add(position);
            break;
        case 2:
            multiply(position);
            break;
    }
}

function main(input: number[]): number {

    let result: number[];
    let position = 0;

    memory = [...input];

    while (memory[position] != 99) {
        executeOpcode(position);
        position += 4;
    }

    return memory[0];

}


//let result = main([1,9,10,3,2,3,11,0,99,30,40,50]);
let result = main(input);

console.log('day2a:', result);
