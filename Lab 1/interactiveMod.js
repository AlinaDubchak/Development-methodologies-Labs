import { solveQuadraticEquation } from "./solver.js";

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question("Введіть параметр a: ", (a) => {
    readline.question("Введіть параметр b: ", (b) => {
      readline.question("Введіть параметр c: ", (c) => {
        solveQuadraticEquation(Number(a), Number(b), Number(c));
        readline.close();
      });
    });
  });