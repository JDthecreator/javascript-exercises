const sumAll = function (a, b) {
  result = 0;

  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";

  if (a < 0 || b < 0) {
    return "ERROR";
  }

  if (a < b) {
    for (i = a; i <= b; i++) {
      result += Number([i]);
    }
  }

  if (a > b) {
    for (i = a; i >= b; i--) {
      result += Number([i]);
    }
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
