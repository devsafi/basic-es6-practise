// for of loop.

// array:
const numbers = [1, 2, 3, 4, 5, 5, 56, 6, 3, 3];
for (const num of numbers) {
    // console.log(num);
}

// string:
const nobab = 'siraj uddola';
for (const char of nobab) {
    // console.log(char);
}

// object e for of loop use hoy na. for in / for each loop use kora jabe.

// for in:-

const info = {
    name: 'Safi',
    age: 20,
    phone: '0145411541'
}

for (const keys in info) {
    const values = info[keys];
    console.log(keys + ': ' + values);
}

// for each:-