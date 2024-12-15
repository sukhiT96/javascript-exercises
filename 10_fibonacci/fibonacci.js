const fibonacci = 
  function (a) {
    const initialArray = [0, 1, 1, 2];
    
    if (a < 0) {
    return "OOPS"
    } else if (a == 0 ) {
    return 0
    } else if (a == 1 || a == 2 || a == 3) {
    return initialArray[initialArray[a]];
    } else {
    
    for (let i = initialArray.length-1; i < a; i ++) {
        initialArray.push(parseInt(initialArray[i])+ parseInt(initialArray[i-1]));
    }
    return initialArray[initialArray.length-1];
  }};

// Do not edit below this line
module.exports = fibonacci;
