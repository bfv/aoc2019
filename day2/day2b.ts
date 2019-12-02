
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

    let result: number;


    for (let noun = 0; noun < 100; noun++) {
        for (let verb = 0; verb < 100; verb++) {

            let position = 0;

            memory = [...input];
            memory[1] = noun;
            memory[2] = verb;

            while (memory[position] != 99) {
                executeOpcode(position);
                position += 4;
            }

            if (memory[0] == 19690720) {
                return noun * 100 + verb;
            }
        }
    }

    return -1;

}

const t1 = new Date().getTime();
const result = main(input);
const t2 = new Date().getTime();

console.log('day2b:', result);
console.log('time:', (t2 - t1), 'ms');