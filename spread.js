const max = Math.max(10, 34, 12, 21, 434, 32);
console.log(max);


// const array = [1, 2, 3, 4, 5, 535, 5, 4, 3,];
// const arrayMax = Math.max(array);

// console.log(arrayMax); // NaN
// karon sikhane array er sorarori number pay nai.
// array er sorasori number paite hoile array er age ... dite hoy

const array = [1, 2, 3, 4, 5, 535, 5, 4, 3,];
const arrayMax = Math.max(...array);

console.log(arrayMax);



// use spread operator to copy.
const friends = [1, 6, 4, 6, 44];
const bondhu = [...friends]; // copy kore neua holo ager array upadan gulo.
bondhu.push(100);

console.log(friends);
console.log(bondhu);

// advance.
const shonkha = [...friends, 500];
console.log(shonkha);