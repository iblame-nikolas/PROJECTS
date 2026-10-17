'use strict';

const countTypesInArray = (arr) => {
  const counts = {};
  for (const item of arr) {
    const type = typeof item;
    if (counts[type] === undefined) {
      counts[type] = 1;
    } else {
      counts[type] += 1;
    }
  }
  return counts;
};

module.exports = { countTypesInArray };