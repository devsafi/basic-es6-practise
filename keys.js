const info = {
    name: 'Safi',
    age: 20,
    phone: '0145411541'
}


// all propertys name:

const keys = Object.keys(info);
// console.log(keys);


// all values name:

const values = Object.values(info);
// console.log(values);


// two dimentional array.

const pair = Object.entries(info);
// console.log(pair);


// // object er value delete korte.

// method: 1
delete info.phone;
// console.log(info);

// method: 2
const { phone, ...shortInfo } = info;
// console.log(shortInfo);

// // freeze korar jonno:
Object.freeze(info);
// ekhon aitar moddeh kono man change, add, delete kono kichui kora kora jabe na.
