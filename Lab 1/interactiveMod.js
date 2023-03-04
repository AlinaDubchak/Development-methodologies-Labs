import { CalcDes, checkValue } from "./solver.js";

const interactiveMode = () => {
    const params = [];
    const questions = ["a = ", "b = ", "c = "];
    const input = process.stdin;
    const output = process.stdout;

input.on("data", (data) => {
      const num = parseFloat(data.toString());
      if (!checkValue(data)) {
        console.log(`Error. Expected a valid real number, got ${data} instead`);
        output.write(questions[params.length]);
      } else if (num === 0) {
        console.log(`Error. Cannot be 0`);
        output.write(questions[params.length]);
      } else {
        params[params.length] = num;
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