const palindromes = 
  function (x) {
    let result;
    if (typeof x !== "string") {
      result = "ERROR"
    } else {
      const ogArray = [];
      for(let i = 0; i < x.length; i++) {
        if(!((x.charCodeAt(i) >= 48 && x.charCodeAt(i) <= 57) || 
        (x.charCodeAt(i) >= 65 && x.charCodeAt(i) <= 90) || 
        (x.charCodeAt(i) >= 97 && x.charCodeAt(i) <= 122)))
        continue;
        ogArray.push(x.charAt(i).toLowerCase());
      }
      const reverseArray = [];
      for (let i = 0; i < ogArray.length; i++) {
        reverseArray.unshift(ogArray[i]);
      };
      result = ogArray.toString("")===reverseArray.toString("");
    };
    return result;
  };

// Do not edit below this line
module.exports = palindromes;
