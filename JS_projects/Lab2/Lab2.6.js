'use strict';

const square = function(x) {
  return x * x;
};

const cube = function(x) {
  return x * x * x;
};

const average = function(a, b) {
  return (a + b) / 2;
};

const calculate = function() {
  const res = [];
  for (let i = 0; i <= 9; i++) {
    const s = square(i);
    const c = cube(i);
    const avg = average(s, c);
    res.push(avg);
  }
  return res;
};

module.exports = { square, cube, average, calculate };