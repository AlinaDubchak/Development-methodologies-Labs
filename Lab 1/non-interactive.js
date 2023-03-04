'use strict'

import { readFileSync, existsSync } from "fs";
import { CalcDes } from "./solver.js";

const formatChecker = (data) =>
  /^-?\d+(\.\d+)? -?\d+(\.\d+)? -?\d+(\.\d+)?\r?\n$/g.test(data);

const FileMode = () => {
  const filePath = process.argv[2];
  if (!existsSync(filePath)) {
    console.log(`Error: file ${filePath} does not exist`);
    process.exit(1);
  }
  const fileData = readFileSync(filePath).toString();
  if (!formatChecker(fileData)) {
    console.log("invalid file format");
    process.exit(1);
  }
  const [a,b,c] = fileData.split("\n")[0].split(" ").map((string) => parseFloat(string));
  if (a === 0) {
    console.log("Error. a cannot be 0");
    process.exit(1);
  }
  console.log(CalcDes(a,b,c));
};

export { FileMode };