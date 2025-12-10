# Number to Bengali Words Converter

[![npm version](https://img.shields.io/npm/v/number-to-bengli-words.svg)](https://www.npmjs.com/package/number-to-bengli-words)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A lightweight JavaScript library to convert English numbers to Bengali words (বাংলা). Supports integers, decimals, and negative numbers.

## ✨ Features

- 🔢 Convert integers to Bengali words
- 💯 Support for large numbers (up to quadrillion)
- 🎯 Decimal number conversion
- ➖ Negative number support
- 🪶 Lightweight with zero dependencies
- 📦 Easy to integrate

## 📦 Installation

```bash
npm install number-to-bengli-words
```

## 🚀 Usage

```javascript
const numberToBengliWords = require("number-to-bengli-words");

// Convert integer
console.log(numberToBengliWords.toBengaliWords(571));
// Output: পাঁচশত একাত্তর

// Convert decimal
console.log(numberToBengliWords.toBengaliWords(3.14));
// Output: তিন দশমিক এক চার

// Convert negative number
console.log(numberToBengliWords.toBengaliWords(-100));
// Output: ঋণাত্মক একশত

// Convert zero
console.log(numberToBengliWords.toBengaliWords(0));
// Output: শূন্য
```

## 📋 Examples

| Number | Bengali Words |
|--------|---------------|
| `0` | শূন্য |
| `571` | পাঁচশত একাত্তর |
| `1000` | এক হাজার |
| `100000` | এক লাখ |
| `10000000` | এক কোটি |
| `3.14` | তিন দশমিক এক চার |
| `-50` | ঋণাত্মক পঞ্চাশ |

## 🛠️ Development

### Prerequisites
- Node.js (version 12 or higher)

### Clone and Setup

```bash
git clone https://github.com/maruf571/number-to-bengali-words.git
cd number-to-bengali-words
npm install
```

### Run Tests

```bash
npm test
```

## 📝 API Reference

### `toBengaliWords(number)`

Converts a number to its Bengali word representation.

**Parameters:**
- `number` (Number): The number to convert (integer or decimal)

**Returns:**
- `string`: Bengali word representation of the number

**Example:**
```javascript
numberToBengliWords.toBengaliWords(123);
// Returns: একশত তেইশ
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/maruf571/number-to-bengali-words/issues).

## 👨‍💻 Author

**Mahmudul Hassan**
- GitHub: [@maruf571](https://github.com/maruf571)
- Email: maruf571@gmail.com

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## ⭐ Show your support

Give a ⭐️ if this project helped you!
