// today forcast
const kelvin = 293;

// celcius is 273 degrees less than kelvin so, saving temperatue in terms if celcius 
const celcius = kelvin-273;

// temperatue in terms of fahrenheit 
let fahrenheit = celcius*(9/5) + 32;

// To get the integer value of Fahrenheit without decimal 
fahrenheit = Math.floor(fahrenheit);

let newton = celcius*(33/100);
newton = Math.floor(newton);
console.log(`\nThe Temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The Temperature is ${newton} newton \n`);
