const NEGATIVE = 'ঋণাত্মক';
const DECIMAL = ' দশমিক';
const ONE_HUNDRED = 100;
const ONE_THOUSAND = 1000;
const ONE_LAC = 100000;
const ONE_CORE = 10000000;
const ONE_BILLION = 1000000000;
const ONE_TRILLION = 1000000000000;
const ONE_QUADRILLION = 1000000000000000;
const MAX = 9007199254740992;
const MAX_SAFE_INTEGER = 9007199254740991;
const number2WordMap = {
    0: `শূন্য`,
    1: `এক`,
    2: `দুই`,
    3: `তিন`,
    4: `চার`,
    5: `পাঁচ`,
    6: `ছয়`,
    7: `সাত`,
    8: `আট`,
    9: `নয়`,
    10: `দশ`,
    11: `এগারো`,
    12: `বারো`,
    13: `তেরো`,
    14: `চৌদ্দ`,
    15: `পনের`,
    16: `ষোল`,
    17: `সতের`,
    18: `আঠার`,
    19: `উনিশ`,
    20: `বিশ`,
    21: `একুশ`,
    22: `বাইশ`,
    23: `তেইশ`,
    24: `চব্বিশ`,
    25: `পঁচিশ`,
    26: `ছাব্বিশ`,
    27: `সাতাশ`,
    28: `আটাশ`,
    29: `ঊনত্রিশ`,
    30: `ত্রিশ`,
    31: `একত্রিশ`,
    32: `বত্রিশ`,
    33: `তেত্রিশ`,
    34: `চৌত্রিশ`,
    35: `পঁয়ত্রিশ`,
    36: `ছত্রিশ`,
    37: `সাঁইত্রিশ`,
    38: `আটত্রিশ`,
    39: `ঊনচল্লিশ`,
    40: `চল্লিশ`,
    41: `একচল্লিশ`,
    42: `বিয়াল্লিশ`,
    43: `তেতাল্লিশ`,
    44: `চুয়াল্লিশ`,
    45: `পঁয়তাল্লিশ`,
    46: `ছিচল্লিশ`,
    47: `সাতচল্লিশ`,
    48: `আটচল্লিশ`,
    49: `ঊনপঞ্চাশ`,
    50: `পঞ্চাশ`,
    51: `একান্ন`,
    52: `বাহান্ন`,
    53: `তেপ্পান্ন`,
    54: `চুয়ান্ন`,
    55: `পঞ্চান্ন`,
    56: `ছাপ্পান্ন`,
    57: `সাতান্ন`,
    58: `আটান্ন`,
    59: `ঊনষাট`,
    60: `ষাট`,
    61: `একষট্টি`,
    62: `বাষট্টি`,
    63: `তেষট্টি`,
    64: `চৌষট্টি`,
    65: `পঁয়ষট্টি`,
    66: `ছেষট্টি`,
    67: `সাতষট্টি`,
    68: `আটষট্টি`,
    69: `উনসত্তুর`,
    70: `সত্তর`,
    71: `একাত্তর`,
    72: `বাহাত্তর`,
    73: `তেহাত্তুর`,
    74: `চুয়াত্তর`,
    75: `পঁচাত্তর`,
    76: `ছিয়াত্তর`,
    77: `সাতাত্তর`,
    78: `আটাত্তর`,
    79: `ঊনআশি`,
    80: `আশি`,
    81: `একাশি`,
    82: `বিরাশি`,
    83: `তিরাশি`,
    84: `চুরাশি`,
    85: `পঁচাশি`,
    86: `ছিয়াশি`,
    87: `সাতাশি`,
    88: `আটাশি`,
    89: `উননব্বই`,
    90: `নব্বই`,
    91: `একানব্বই`,
    92: `বিরানব্বই`,
    93: `তিরানব্বই`,
    94: `চুরানব্বই`,
    95: `পঁচানব্বই`,
    96: `ছিয়ানব্বই`,
    97: `সাতানব্বই`,
    98: `আটানব্বই`,
    99: `নিরানব্বই`,
    100: `শত`,
    1000: `হাজার`,
    100000: `লক্ষ`,
    10000000: `কোটি`,
    1000000000: `বিলিয়ন`,
    1000000000000: `ট্রিলিয়ন`,
    1000000000000000: `কোয়াড্রিলিয়ন`
};

exports.toBengaliWords = function(number) {

    let words;


    if (!isValidNumber(number)) {
        throw new TypeError(
            'Not a finite number: ' + number + ' (' + typeof number + ')'
        );
    }

    if (!isSafeNumber(number)) {
        throw new RangeError(
            'Input is not a safe number, it’s either too large or too small.'
        );
    }

    console.log(`Start converting ` + number + ` to Bengali words`);

    const num = parseInt(number, 10);
    words = generateWords(num);

    if(!isInt(number)){
        const points = number.toString().split(`.`)[1];
        words +=  DECIMAL;
        for(let point of points){
            words += ' ' +number2WordMap[point];
        }
    }
    return words;
}


function generateWords(number) {

    let remainder, word, words = arguments[1];

    if(number === 0) {
        return  !words ? number2WordMap[0] : words.join(' ').replace(/,$/, '');
    }

    if (!words) {
        words = [];
    }

    if (number < 0) {
        words.push(NEGATIVE);
        number = Math.abs(number);
    }

    if (number < ONE_HUNDRED) {
        remainder = 0;
        word = number2WordMap[number];
    } else if (number < ONE_THOUSAND) {
        remainder = number % ONE_HUNDRED;
        word = number2WordMap[Math.floor(number / ONE_HUNDRED)] + number2WordMap[ONE_HUNDRED];
    } else if (number < ONE_LAC) {
        remainder = number % ONE_THOUSAND;
        word = number2WordMap[Math.floor(number / ONE_THOUSAND)] + ' ' + number2WordMap[ONE_THOUSAND];
    } else if (number < ONE_CORE) {
        remainder = number % ONE_LAC;
        word = number2WordMap[Math.floor(number/ONE_LAC)] + ' ' + number2WordMap[ONE_LAC];
    } else if (number < ONE_BILLION) {
        remainder = number % ONE_CORE;
        word = generateWords(Math.floor(number / ONE_CORE)) + ' ' + number2WordMap[ONE_CORE];
    } else if (number < ONE_TRILLION) {
        remainder = number % ONE_BILLION;
        word = generateWords(Math.floor(number / ONE_BILLION)) + ' ' + number2WordMap[ONE_BILLION];
    } else if (number < ONE_QUADRILLION) {
        remainder = number % ONE_TRILLION;
        word = generateWords(Math.floor(number / ONE_TRILLION)) + ' ' + number2WordMap[ONE_TRILLION];
    } else if (number <= MAX) {
        remainder = number % ONE_QUADRILLION;
        word = generateWords(Math.floor(number / ONE_QUADRILLION)) + ' ' + number2WordMap[ONE_QUADRILLION]
    }
    words.push(word);
    return generateWords(remainder, words);
}


function isValidNumber(value) {
    return !(typeof value !== 'number' || Number.isNaN(value) || value === Infinity || value === -Infinity);
}


function isSafeNumber(value) {
    return typeof value === 'number' && Math.abs(value) <= MAX_SAFE_INTEGER;
}

function isInt(n) {
    return n % 1 === 0;
 }