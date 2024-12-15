const reverseString = 
function (string) {
  let i = string.length - 1;
  console.log(`initial ${i}`);
  let reverseArray = [];
  console.log(`initial ${reverseArray}`)
  for (i; i >= 0; i--) {
    reverseArray.push(`${string.charAt(i)}`);
    console.log (`iteration ${i}`);
    console.log(reverseArray);
  };
  console.log(reverseArray);
  reversedString = reverseArray.join("");
  console.log(reversedString);
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
