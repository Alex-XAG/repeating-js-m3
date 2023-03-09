//  Operation spread
//  - Array.prottotype.concat() and analog by spread

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

const numbers = [0, 5, 10, ...[1, 2, 3], ...[4, 5, 6], ...[7, 8, 9]];

console.log(numbers);

// ---- Search of minimal or maximal temperature(number)

const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.min(temps)); /// WRONG!!!!
// console.log(Math.min(...temps)); /// good!!!

// const a = [{ a: 1 }, { b: 2 }, { c: 3 }];
// const b = [...a];

// console.log("a: ", a); // [{ a: 1 }, { b: 2 }, { c: 3 }]
// console.log("b: ", b); // [{ a: 1 }, { b: 2 }, { c: 3 }]
// ---- Unit few arrays in one by concat() and spread

const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

// Spread of objects
// - Object.prototype.assign() and spread

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

////// old school/////

// const c = Object.assign({}, a, b); // {x:0, y:2, z:3}

////new syntax/////

const c = { ...a, name: "Mango", ...b };

console.log(c); // {x: 0, y: 2, name: "Mango", z: 3}
