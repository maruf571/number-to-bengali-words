# English number to Bengali word converter
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=maruf571_number-to-bengali-words&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=maruf571_number-to-bengali-words)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=maruf571_number-to-bengali-words&metric=bugs)](https://sonarcloud.io/summary/new_code?id=maruf571_number-to-bengali-words)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=maruf571_number-to-bengali-words&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=maruf571_number-to-bengali-words)

This is a JavaScript lib to convert a english number to Bengali words. 
Example:
```
571 > পাঁচশত একাত্তর
3.14 > তিন দশমিক এক চার
```

### Prerequisites
* Node 

## Install
```
npm i number-to-bengli-words
``` 

## Running
```
var numberToBengliWords = require("number-to-bengli-words");
numberToBengliWords.toBengaliWords(3.14);
```
## Test
```
npm install
jest
```

## Authors
* **Mahmudul Hassan**

## License
This project is licensed under the ISC License
