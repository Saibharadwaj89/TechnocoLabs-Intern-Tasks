// storing my current age in myAge variable
const myAge = 21;

// first two years of a dog’s life count as 10.5 dog years each
let earlyYears = 2;
earlyYears *= 10.5;

// since first 2 yesrs is calculated
let laterYears = myAge - 2;

// each later years equates to 4 dog years
laterYears = laterYears * 4;

// finding my age in dog years
const myAgeInDogYears = earlyYears + laterYears;

// storing my name and printing my age in dog years
let myName = "Bharadwaj";

// onverting all characters to lower case in myName
myName = myName.toLowerCase();
console.log(`\nMy name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.\n`);