const repeatString = 
function (string, num) {
  let pass1 = string;
  if (num > 0) {
    for (let i = 1; i < num; i++) {
      pass1 += string;
      console.log(`iteration ${i}`);
    };
    return pass1;
  } else if (num === 0) {
    return ""}
    else if (num < 0) {
      return "ERROR";}
    else {return pass1};
};

console.log(repeatString("pleaseWork", 5));
// Do not edit below this line
module.exports = repeatString;
