const info = {
    name: 'Safi',
    phone: '01703945454',
    age: 20,
    home: 'matikata'
}

// object er value bar bar use korar jonno aivabe nite hoy.

// const name = info.name;
// const phone = info.phone;
// const age = info.age;

// console.log(name);
// console.log(name);
// console.log(name);
// console.log(phone);
// console.log(phone);
// console.log(phone);
// console.log(phone);
// console.log(age);
// console.log(age)
// console.log(age);
// console.log(age);
// console.log(age);
// console.log(age);

// ================================================

// distructuring korar niom. jodi dan pashe object dey tahole bam pasheu object hobe.
// aikhane bam pashe j property deua hobe oita variable hoye jabe, caile onke gula deua jabe.
const { home, name, phone, age } = info;
console.log(home);
console.log(name);
console.log(phone);
console.log(age);

// variable er nam change korte caile property name diye : diye notun nam dite hobe.
const { home: bari } = info;
console.log(bari);


// array distructuring.

const arr = [1, 2, 3, 4, 4]
const [a, b] = arr;
// aikhane a, b 2i ta variable er modde man diclare hoye gache.
console.log(a, b);