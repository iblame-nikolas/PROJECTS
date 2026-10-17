'use strict';

const generateKey = function(length, characters) {
  let key = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    key += characters[randomIndex];
  }
  return key;
};

module.exports = { generateKey };