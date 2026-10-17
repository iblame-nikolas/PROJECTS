'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const parts = ip.split('.');
  let res = 0;
  let shift = 24;
  for (let i = 0; i < parts.length; i++) {
    const num = parseInt(parts[i], 10);
    res = res + (num << shift);
    shift -= 8;
  }
  return res;
};

module.exports = { ipToInt };