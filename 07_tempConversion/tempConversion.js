const convertToCelsius = 
function convertToCelcius (x) {
  function rounding (a, decimalPlace) {
    let finalNo;
    if (decimalPlace === 0) {
      finalNo = Math.round(a);
    } else if (Math.round(a-0.4) === Math.round(a + 0.4)) {
      finalNo = Math.round(a);
    } else {
      let stringVersion = a.toString();
      const stringArray = stringVersion.split('');
      const integralArray = [];
      const fractionArray  = [];
      for (let i = 0; i < stringArray.length; i++) {
          if(stringArray[i] === ".") break;
          integralArray.push(stringArray[i]);
      };
      let decimalPosition= stringArray.indexOf(".");
      for (let z = ++decimalPosition; z < stringArray.length; z++) {
          fractionArray.push(stringArray[z]);
      };
      if (fractionArray.length > decimalPlace) {
        let integralNoString = integralArray.join("");
        let fractionNoString = fractionArray.join("");
        let fractionRounded = Math.round((parseInt(fractionNoString))/((10**(fractionArray.length-decimalPlace))));
        finalNo = parseFloat(integralNoString + "." + fractionRounded.toString());
      } else {finalNo = a};
    };
    console.log(finalNo);
    return finalNo;
  };
  let celcius = (x - 32)*(5/9);
  console.log(rounding(celcius, 1));
  return rounding(celcius, 1);
};

const convertToFahrenheit = 
  function (x) {
    function rounding (a, decimalPlace) {
      let finalNo;
      if (decimalPlace === 0) {
        finalNo = Math.round(a);
      } else if (Math.round(a-0.4) === Math.round(a + 0.4)) {
        finalNo = Math.round(a);
      } else {
        let stringVersion = a.toString();
        const stringArray = stringVersion.split('');
        const integralArray = [];
        const fractionArray  = [];
        for (let i = 0; i < stringArray.length; i++) {
            if(stringArray[i] === ".") break;
            integralArray.push(stringArray[i]);
        };
        let decimalPosition= stringArray.indexOf(".");
        for (let z = ++decimalPosition; z < stringArray.length; z++) {
            fractionArray.push(stringArray[z]);
        };
        if (fractionArray.length > decimalPlace) {
          let integralNoString = integralArray.join("");
          let fractionNoString = fractionArray.join("");
          let fractionRounded = Math.round((parseInt(fractionNoString))/((10**(fractionArray.length-decimalPlace))));
          finalNo = parseFloat(integralNoString + "." + fractionRounded.toString());
        } else {finalNo = a};
      };
      console.log(finalNo);
      return finalNo;
    };      
    let fahrenheit = (x * (9/5)) + 32;
    console.log(rounding(fahrenheit, 1));
    return rounding(fahrenheit, 1);
  };
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
