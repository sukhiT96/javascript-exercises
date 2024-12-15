const sumAll = 

  function (a, b) {
    if (a < 0 || 
      b < 0 || 
      !Number.isInteger(a) || 
    !Number.isInteger(b) || 
    isNaN(a) || 
    isNaN(b)) {
      return "ERROR";
    } else {
      let originalLower = Math.min(a, b);
      let firstNo = Math.min(a, b);
      let orginalHigher = Math.max(a, b);
      let difference = Math.abs(b-a);
      for (let i = originalLower; i < difference; i++) {
        originalLower += ++firstNo;
      }
      let sum = originalLower + orginalHigher;
      return sum;};
  };


// Do not edit below this line
module.exports = sumAll;
