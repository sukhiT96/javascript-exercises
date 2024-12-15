const findTheOldest = (people) => {
  function sortHelp (a,b) { 
    const today = new Date();
    let A = (a.yearOfDeath || today.getFullYear()) - a.yearOfBirth;
    let B = (b.yearOfDeath || today.getFullYear()) - b.yearOfBirth;
    return B - A;
  };
  const oldest = people.sort(sortHelp);
  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
