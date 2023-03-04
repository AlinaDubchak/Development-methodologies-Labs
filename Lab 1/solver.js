'use strict'

const checkValue = (data) => {
  const num = parseFloat(data.toString());
  if (isNaN(num) || data.toString().trim().length !== num.toString().length) {
    return false;
  }
  return true;
};
  
    function CalcDes(a,b,c) {
    console.log(`The equation is: (${a})x^2 + (${b})x + (${c}) = 0`);
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

  export { CalcDes, checkValue };

