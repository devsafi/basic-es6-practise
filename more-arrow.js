// parameter bracket diye.
const getAge = (person) => person.age;
const student = { name: 'safi', age: 20 };
const age = getAge(student);
console.log(age);

// 1 ta parameter hoile bracket dileu hoy na dileu hoy.

// parameter bracket sara.
const getThird = numbers => numbers[2];
const result = getThird([1, 2, 3, 4, 5, 6, 6]);
console.log(result);

// no parameter.
const getPI = () => Math.PI;
console.log(getPI());


// 1 line e arrow function likhle kono return dite hoy na.
// beshi line e korle nicher niome korte hobe.
// large arrow function.
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mul = x * y * z;
    const result = sum + mul;
    return result;
}

console.log(doMath(5, 7, 9));