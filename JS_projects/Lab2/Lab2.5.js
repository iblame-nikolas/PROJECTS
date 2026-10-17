'use strict';

const rangeOdd = function(start, end) {
  const res = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      res.push(i);
    }
  }
  return res;
};

module.exports = { rangeOdd };