function add(sum1, sum2) {
    const result = sum1 + sum2;
    // console.log(sum1, sum2, result);
    return result;
}

// const sum = add(5, 7); // 5 7 12
// const sum = add(5, ); // 5 undefined NaN
// const sum = add(); // undefined undefined NaN


// default man dhore niye kaj kora. eti shadaronto dan pasheyi boshe. default man dhore neuar por o jodi keu paremeter er value dey tahole oi value ee man hishabe kaj korbe. jog er jonno shadharonto 0 ar gun er jonno 1 deua hoy.

function add(sum1 = 0, sum2 = 0) {
    const result = sum1 + sum2;
    // console.log(sum1, sum2, result);
    return result;
}

// const sum = add(5, 7); // 5 7 12
// const sum = add(5); // 5 0 5
// const sum = add(); // 0 0 0

// string er jonno default value neuar jonno empty string nite hoy.

function fullName(first, last = '') {
    const full = first + ' ' + last;
    return full;
}

// array er default value er jonno empty array dite hobe.

const numbers = [];

// object er default value er jonno empty object dite hobe.

const student = {};