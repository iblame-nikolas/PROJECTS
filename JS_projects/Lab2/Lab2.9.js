'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Lucius Verus', phone: '+380445554422' },
];

const findPhoneByName = function(name) {
  for (let i = 0; i < phonebook.length; i++) {
    const item = phonebook[i];
    if (item.name === name) {
      return item.phone;
    }
  }
};

module.exports = { phonebook, findPhoneByName };