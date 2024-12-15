const leapYears = 
  function (a) {
    let remainderCheck;
    if (a % 100 === 0) {
      remainderCheck = a % 400;
    } else if (a % 4 === 0) {
      remainderCheck = 0;
    } else {remainderCheck = a % 4;};
    console.log(!remainderCheck);
    return !remainderCheck;
  };

// Do not edit below this line
module.exports = leapYears;
