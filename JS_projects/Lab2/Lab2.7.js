'use strict';

const fn = function() {
  const obj1 = { name: 'John' };
  let obj2 = { name: 'Bob' };

  // Змінюємо поле name у обох об'єктів
  obj1.name = 'Alice';
  obj2.name = 'Kate';

  // Намагаємося присвоїти новий об'єкт:
  // obj1 = { name: 'New' }; // Викличе помилку, бо obj1 — це константна змінна (const)
  obj2 = { name: 'New' };    // Працює успішно, бо obj2 оголошена через let
};

module.exports = { fn };