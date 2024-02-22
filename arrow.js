// function add(a, b){
//     const sum = a + b;
//     return sum;
// }

// function declaration
function add(a, b) {
    return a + b;
}

console.log(add(5, 90));

// function expression
const add2 = function (a, b) {
    return a + b;
}
console.log(add2(5, 90));

// arrow function
const add3 = (a, b) => a + b;
console.log(add3(5, 90));

const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
console.log(add4(2, 3, 4, 5));

const multiply = (x, y, z) => x * y * z;
console.log(multiply(3, 3, 3));