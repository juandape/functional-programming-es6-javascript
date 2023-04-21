const arr = [1, 2, 3, 4, 5, 6];

// utilizar el método map de los arreglos para duplicar cada elemento
// [2, 4, 6, 8, 10, 12]

const double = arr.map((num) => num * 2);
console.log("🚀 ~ file: ejercicio1.js:7 ~ newArr:", double);

// utilizar el método filter para filtrar los números pares de arr
// [2, 4, 6]

const pares = arr.filter((num) => num % 2 === 0);
console.log("🚀 ~ file: ejercicio1.js:13 ~ pares:", pares);

// utilizar el método reduce para sumar todos los elementos
// 21

const sum = arr.reduce((total, value) => total + value, 0);
console.log("🚀 ~ file: ejercicio1.js:19 ~ sum:", sum);
