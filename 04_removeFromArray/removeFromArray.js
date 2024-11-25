const removeFromArray = function (Array1, ...args) {
  const newArray = [];

  Array1.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
