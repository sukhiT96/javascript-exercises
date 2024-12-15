const removeFromArray = 
  function (array, ...args) {
    const newArray = [];
    for (let i = 0; i < (array.length); i++) {
      console.log(`i am iteration and array index ${i}`);
      if (args.includes(array[i])) continue;
      newArray.push(array[i]);
      };   
    return newArray;
    };
// Do not edit below this line
module.exports = removeFromArray;
