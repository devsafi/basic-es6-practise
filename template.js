const first = 'love';
const second = 'you';

const name = first + ' ' + second;
console.log(name);


const a = 10;
const b = 20;

const sum = 'the sum of' + ' ' + a + ' ' + 'and' + ' ' + b + ' ' + 'is' + ' ' + (a + b);
// aivabe likha ta shubidha jonok na .. onek kosto hobe.

// =============================================================================

// tai niceer niom er maddhome use korle valo hoy. ``.
const math = `the sum of ${a} and ${b} is ${a + b}`;

console.log(sum);
console.log(math);

// ek line er nice arek line ante.
const email = 'hi John \n' +
    'cena cena lage \n' + 'abar';

// ================================================ easy way ``
const mail = `hi John
cena cena lage
abar`;


console.log(email);
console.log(mail);