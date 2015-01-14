#!/usr/bin/env node

// weather.js, run with node weather.js

console.log(process.argv);

var celsius = false;
var fahrenheit = false;
var location = null;
var arg = process.argv;

function checkCommand (arg) {
  switch (arg[2]) {
    case '-h':
    case '--help':
      console.log("Here's some help...");
      process.exit(0);
      break;
    case '-V':
    case '--version':
      console.log('weather 0.1.0');
      process.exit(0);
      break;
    case '-f':
    case '--fahrenheit':
      fahrenheit = true;
      break;
    case '-c':
    case '--celsius':
      celsius = true;
      break;
    default:
      location = arg;
      break;
  }
}

if (!celsius && !fahrenheit) {
  fahrenheit = true;
}

if (!location) {
  location = 'Portland, OR';
}

console.log('The weather in %s is hopefully sunny.', location);
if (fahrenheit) {
  console.log('The temperature is 70 fahrenheit.');
}
if (celsius) {
  console.log('The temperature is 21 Celsius.')
}


checkCommand(arg);