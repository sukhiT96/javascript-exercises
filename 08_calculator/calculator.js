const add = 
  function (...args) {
    const string = args;
    let totalSum = 0;
    for (let i = 0; i < string.length; i++) {
      totalSum += string[i];
    }
    console.log(totalSum);
    return totalSum;
  };

const subtract = 
  function(a, b) {
    return a - b;
  };

const sum = 
  function ([...args]) {
    const string1 = [...args];
    const string = string1.flat();
    console.log(string.length);
    let totalSum = 0;
    console.log(totalSum);
    
    if (string.length > 1) {
      console.log("i am working");
      for (let i = 0; i < string.length; i++) {
      totalSum += string[i];
    };
    } else if (string.length === 1) {
      totalSum = string[0]
    } else totalSum = 0;
    console.log(totalSum);
    return totalSum;
  };

const multiply = 
  function ([...jargs]) {
    const args = jargs.flat();
    let firstMultiple = 1;
    let secondMultiple = 1;
    let result = 1;
    for (let i = 0; i < args.length; i++) {
      secondMultiple = args[i];
      result = result*firstMultiple*secondMultiple;
    };
    console.log(result);
    return result;
  };

const power = 
  function(a,b) {
    return a**b;
  };

const factorial = 
  function (a) {
    if (a === 0) {
      return 1;
    } else if (a > 0) {
      let oneNumberDown = a - 1;
      let result1 = a;
      for (let i = oneNumberDown; i >1; i--) {
        result1 = result1*oneNumberDown;;
        oneNumberDown--;
      } console.log(result1);
    return result1;
    } else {
      return"ERROR";
    };
  };


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
