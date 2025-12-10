let value = 0;
if (value > 0) {
  console.log(true);
} else {
  console.log(false);
}

function testVariables() {
  let localVar = "локальна";
  console.log(localVar);
}

let a = 0.1;
let b = 0.2;
console.log((a * 10 + b * 10) / 10);

a += 5;
console.log(a);

console.log(a === 15, b > 5);

console.log(a > 10 && b < 5, !(a < 10));

let num = 7;

if (num > 10) {
  console.log("Більше 10");
} else {
  console.log("10 або менше");
}

switch (num) {
  case 5:
    console.log("5");
    break;
  case 7:
    console.log("7");
    break;
  default:
    console.log("Інше число");
}

for (let i = 1; i <= 3; i++) {
  console.log("Цикл for:", i);
}

let j = 1;
while (j <= 3) {
  console.log("Цикл while:", j);
  j++;
}

// Функція з параметрами
function greet(name) {
  return `Привіт, ${name}!`;
}

console.log(greet("Іван"));

// Функція-вираз
const sum = function (a, b) {
  return a + b;
};
console.log(sum(5, 7));

// Стрілочна функція
const multiply = (x, y) => x * y;
console.log(multiply(3, 4));

// Об’єкти
let person = { name: "Іван", age: 25 };
console.log(person.name);

// Масиви
let numbers = [1, 2, 3];
console.log(numbers.length);

// Дата
let now = new Date();
console.log(now);

// Math
console.log(Math.sqrt(16));

// Вікно
console.log(window.innerWidth, window.innerHeight);

// URL сторінки
console.log(window.location.href);
