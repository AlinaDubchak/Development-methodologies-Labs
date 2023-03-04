import { interactiveMode } from "./interactiveMod.js";

"use strict"

let flag = true;

function CheckingValues(a, b, c) {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      console.log("Error: epected a valid real number, got invalid instead.");
      flag = false;
      return flag
    }
    if (a === 0) {
      console.log("Error: parameter 'a' must be different from 0");
      flag=false;
      return flag;
    }
  }
  
    function CalcDes(a,b,c){
    const discriminant = Math.pow(b, 2) - 4 * a * c;
    if (discriminant < 0) {
      console.log("There are 0 roots");
    } else if (discriminant === 0) {
      const x = -b / (2 * a);
      console.log(`Only one root: x = ${x}`);
    } else {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      console.log(`There are 2 roots: x1 = ${x1}, x2 = ${x2}`);
    }
  }

  function solveQuadraticEquation(a,b,c){
    CheckingValues(a,b,c);
    if (flag === false){
      return;
    } else CalcDes(a,b,c); 
    
  }

