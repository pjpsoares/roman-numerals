# Roman Numerals
Utility class that will convert from int to roman numeral and vice versa

## Setup
```sh
npm i
```

## Unit tests
```sh
npm test
```

## Linting
```sh
npm run lint
```

## Using RomanNumber class

### Instance creation
It's encouraged to instantiate a new value by using the new constructor like demonstrated below:
```js
var romanNumber1 = new RomanNumber(‘XX’);
var romanNumber2 = new RomanNumber(40);

console.log(romanNumber1.toInt()); // => 20
console.log(romanNumber1.toString()); // => ‘XX’

console.log(romanNumber2.toInt()); // => 40
console.log(romanNumber2.toString()); // => ‘XL’
```

### Errors thrown
There are 3 custom errors thrown:
* invalid range - tried to create a new instance with an invalid value. The value must be between 1 and 3999.
* value required - a value needs to be passed when creating a new instance. null, undefined or '' are not valid values.
* invalid value - there was an error trying to parse the roman literal. Please review it.

#Project start
Mon Sep 05 2016 19:06:19 GMT+0100 (WEST)
