'use strict'

import { CalcDes, checkValue } from "./solver.js";

const interactiveMode = () => {
    const params = [];
    const questions = ["a = ", "b = ", "c = "];
    const input = process.stdin;
    const output = process.stdout;

    input.on("data", (data) => {
      const num = parseFloat(data.toString());
      params[params.length] = num;
      if (!checkValue(data)) {
        console.log(`Error. Expected a valid real number, got ${data} instead`);
        params.pop();
        output.write(questions[params.length]);
      } else if (params[0] === 0) {
        console.log(`Error. Cannot be 0`);
        params.pop();
        output.write(questions[params.length]);
      } else {
        if (params.length < questions.length) {
          output.write(questions[params.length]);
        } else {
            CalcDes(...params);
          process.exit(0);
        }
      }

  })
  process.stdout.write(questions[0]);
};

export { interactiveMode };