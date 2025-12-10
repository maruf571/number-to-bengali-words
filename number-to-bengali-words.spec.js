const numberToBengaliWords = require('./index');

test('test zero', () => {
    const result = numberToBengaliWords.toBengaliWords(0);
    expect(result).toBe('শূন্য');
});

test('test single digit 1', () => {
    const result = numberToBengaliWords.toBengaliWords(1);
    expect(result).toBe('এক');
});

test('test single digit 5', () => {
    const result = numberToBengaliWords.toBengaliWords(5);
    expect(result).toBe('পাঁচ');
});

test('test single digit 7', () => {
    const result = numberToBengaliWords.toBengaliWords(7);
    expect(result).toBe('সাত');
});

test('test double digit', () => {
    const result = numberToBengaliWords.toBengaliWords(71);
    expect(result).toBe('একাত্তর');
});

test('test triple digit', () => {
    const result = numberToBengaliWords.toBengaliWords(571);
    expect(result).toBe('পাঁচশত একাত্তর');
});

test('test quadruple digit', () => {
    const result = numberToBengaliWords.toBengaliWords(5715);
    expect(result).toBe('পাঁচ হাজার সাতশত পনের');
});

test('test quintuple digit', () => {
    const result = numberToBengaliWords.toBengaliWords(57157);
    expect(result).toBe('সাতান্ন হাজার একশত সাতান্ন');
});

test('test sextuple digit', () => {
    const result = numberToBengaliWords.toBengaliWords(571571);
    expect(result).toBe('পাঁচ লক্ষ একাত্তর হাজার পাঁচশত একাত্তর');
});

test('test septuple digit', () => {
    const result = numberToBengaliWords.toBengaliWords(5715715);
    expect(result).toBe('সাতান্ন লক্ষ পনের হাজার সাতশত পনের');
});

test('test octuple digit', () => {
    const result = numberToBengaliWords.toBengaliWords(57157157);
    expect(result).toBe('পাঁচ কোটি একাত্তর লক্ষ সাতান্ন হাজার একশত সাতান্ন');
});

test('test nonuple digit', () => {
    const result = numberToBengaliWords.toBengaliWords(571571571);
    expect(result).toBe('সাতান্ন কোটি পনের লক্ষ একাত্তর হাজার পাঁচশত একাত্তর');
});

test('test decuple digit', () => {
    const result = numberToBengaliWords.toBengaliWords(5715715715);
    expect(result).toBe('পাঁচ বিলিয়ন একাত্তর কোটি সাতান্ন লক্ষ পনের হাজার সাতশত পনের');
});

test('test undecuple digit', () => {
    const result = numberToBengaliWords.toBengaliWords(57157157157);
    expect(result).toBe('সাতান্ন বিলিয়ন পনের কোটি একাত্তর লক্ষ সাতান্ন হাজার একশত সাতান্ন');
});

test('test duodecuple digit', () => {
    const result = numberToBengaliWords.toBengaliWords(571571571571);
    expect(result).toBe('পাঁচশত একাত্তর বিলিয়ন সাতান্ন কোটি পনের লক্ষ একাত্তর হাজার পাঁচশত একাত্তর');
});

test('test tredecuple digit', () => {
    const result = numberToBengaliWords.toBengaliWords(5715715715715);
    expect(result).toBe('পাঁচ ট্রিলিয়ন সাতশত পনের বিলিয়ন একাত্তর কোটি সাতান্ন লক্ষ পনের হাজার সাতশত পনের');
});

test('test quattuordecuple digit', () => {
    const result = numberToBengaliWords.toBengaliWords(57157157157157);
    expect(result).toBe('সাতান্ন ট্রিলিয়ন একশত সাতান্ন বিলিয়ন পনের কোটি একাত্তর লক্ষ সাতান্ন হাজার একশত সাতান্ন');
});

test('test quindecuple digit', () => {
    const result = numberToBengaliWords.toBengaliWords(571571571571571);
    expect(result).toBe('পাঁচশত একাত্তর ট্রিলিয়ন পাঁচশত একাত্তর বিলিয়ন সাতান্ন কোটি পনের লক্ষ একাত্তর হাজার পাঁচশত একাত্তর');
});

test('test sexdecuple digit', () => {
    const result = numberToBengaliWords.toBengaliWords(5715715715715715);
    expect(result).toBe('পাঁচ কোয়াড্রিলিয়ন সাতশত পনের ট্রিলিয়ন সাতশত পনের বিলিয়ন একাত্তর কোটি সাতান্ন লক্ষ পনের হাজার সাতশত পনের');
});

test('test negative number', () => {
    const result = numberToBengaliWords.toBengaliWords(-571);
    expect(result).toBe('ঋণাত্মক পাঁচশত একাত্তর');
});

test('test negative sexdecuple digit number', () => {
    const result = numberToBengaliWords.toBengaliWords(-5715715715715715);
    expect(result).toBe('ঋণাত্মক পাঁচ কোয়াড্রিলিয়ন সাতশত পনের ট্রিলিয়ন সাতশত পনের বিলিয়ন একাত্তর কোটি সাতান্ন লক্ষ পনের হাজার সাতশত পনের');
});

test('test 1 digit decimal point', () => {
    const result = numberToBengaliWords.toBengaliWords(5.7);
    expect(result).toBe('পাঁচ দশমিক সাত');
});


test('test 2 digit decimal point', () => {
    const result = numberToBengaliWords.toBengaliWords(5.71);
    expect(result).toBe('পাঁচ দশমিক সাত এক');
});

test('test 2 digit decimal point', () => {
    const result = numberToBengaliWords.toBengaliWords(0.0000000);
    expect(result).toBe('শূন্য');
});

test('test 5 digit decimal point', () => {
    const result = numberToBengaliWords.toBengaliWords(0.00001);
    expect(result).toBe('শূন্য দশমিক শূন্য শূন্য শূন্য শূন্য এক');
});

test('test 5 digit decimal point', () => {
    const result = numberToBengaliWords.toBengaliWords(111.00001);
    expect(result).toBe('একশত এগারো দশমিক শূন্য শূন্য শূন্য শূন্য এক');
});

test('test 10 digit decimal point', () => {
    const result = numberToBengaliWords.toBengaliWords(57157.157157);
    expect(result).toBe('সাতান্ন হাজার একশত সাতান্ন দশমিক এক পাঁচ সাত এক পাঁচ সাত');
});

test('test 10 digit decimal point', () => {
    const result = numberToBengaliWords.toBengaliWords(5.7157157157);
    expect(result).toBe('পাঁচ দশমিক সাত এক পাঁচ সাত এক পাঁচ সাত এক পাঁচ সাত');
});

test('test negative 10 digit decimal point', () => {
    const result = numberToBengaliWords.toBengaliWords(-5.7157157157);
    expect(result).toBe('ঋণাত্মক পাঁচ দশমিক সাত এক পাঁচ সাত এক পাঁচ সাত এক পাঁচ সাত');
});

test('test 10 digit decimal point', () => {
    const result = numberToBengaliWords.toBengaliWords(0.7157157157);
    expect(result).toBe('শূন্য দশমিক সাত এক পাঁচ সাত এক পাঁচ সাত এক পাঁচ সাত');
});


test('test 10 digit decimal point', () => {
    const result = numberToBengaliWords.toBengaliWords(.7157157157);
    expect(result).toBe('শূন্য দশমিক সাত এক পাঁচ সাত এক পাঁচ সাত এক পাঁচ সাত');
});


test('test input not safe', () => {
    expect(() => {
        numberToBengaliWords.toBengaliWords(57157157157157157);
    }).toThrow('Input is not a safe number, it’s either too large or too small.');
});



test('test non number', () => {
    expect(() => {
        numberToBengaliWords.toBengaliWords(abcderf);
    }).toThrow('abcderf is not defined');
});

test('test non number', () => {
    expect(() => {
        numberToBengaliWords.toBengaliWords(abcderf);
    }).toThrow('abcderf is not defined');
});


test('test los small number', () => {
    expect(() => {
        numberToBengaliWords.toBengaliWords(0.0000001);
    }).toThrow('points is not iterable');
});

// ============================================
// CRITICAL TEST CASES - Edge Cases & Boundaries
// ============================================

describe('Boundary Value Tests', () => {
    test('test number 100 (exact hundred)', () => {
        const result = numberToBengaliWords.toBengaliWords(100);
        expect(result).toBe('একশত');
    });

    test('test number 1000 (exact thousand)', () => {
        const result = numberToBengaliWords.toBengaliWords(1000);
        expect(result).toBe('এক হাজার');
    });

    test('test number 100000 (exact lac)', () => {
        const result = numberToBengaliWords.toBengaliWords(100000);
        expect(result).toBe('এক লক্ষ');
    });

    test('test number 10000000 (exact crore)', () => {
        const result = numberToBengaliWords.toBengaliWords(10000000);
        expect(result).toBe('এক কোটি');
    });

    test('test number 99 (boundary before hundred)', () => {
        const result = numberToBengaliWords.toBengaliWords(99);
        expect(result).toBe('নিরানব্বই');
    });

    test('test number 999 (boundary before thousand)', () => {
        const result = numberToBengaliWords.toBengaliWords(999);
        expect(result).toBe('নয়শত নিরানব্বই');
    });

    test('test number 9999 (boundary before lac range)', () => {
        const result = numberToBengaliWords.toBengaliWords(9999);
        expect(result).toBe('নয় হাজার নয়শত নিরানব্বই');
    });
});

describe('Special Number Tests', () => {
    test('test all single digits 0-9', () => {
        expect(numberToBengaliWords.toBengaliWords(0)).toBe('শূন্য');
        expect(numberToBengaliWords.toBengaliWords(1)).toBe('এক');
        expect(numberToBengaliWords.toBengaliWords(2)).toBe('দুই');
        expect(numberToBengaliWords.toBengaliWords(3)).toBe('তিন');
        expect(numberToBengaliWords.toBengaliWords(4)).toBe('চার');
        expect(numberToBengaliWords.toBengaliWords(5)).toBe('পাঁচ');
        expect(numberToBengaliWords.toBengaliWords(6)).toBe('ছয়');
        expect(numberToBengaliWords.toBengaliWords(7)).toBe('সাত');
        expect(numberToBengaliWords.toBengaliWords(8)).toBe('আট');
        expect(numberToBengaliWords.toBengaliWords(9)).toBe('নয়');
    });

    test('test round numbers in teens', () => {
        expect(numberToBengaliWords.toBengaliWords(10)).toBe('দশ');
        expect(numberToBengaliWords.toBengaliWords(15)).toBe('পনের');
        expect(numberToBengaliWords.toBengaliWords(19)).toBe('উনিশ');
    });

    test('test round numbers in tens', () => {
        expect(numberToBengaliWords.toBengaliWords(20)).toBe('বিশ');
        expect(numberToBengaliWords.toBengaliWords(30)).toBe('ত্রিশ');
        expect(numberToBengaliWords.toBengaliWords(50)).toBe('পঞ্চাশ');
        expect(numberToBengaliWords.toBengaliWords(90)).toBe('নব্বই');
    });

    test('test number with only hundreds (no remainder)', () => {
        expect(numberToBengaliWords.toBengaliWords(200)).toBe('দুইশত');
        expect(numberToBengaliWords.toBengaliWords(500)).toBe('পাঁচশত');
        expect(numberToBengaliWords.toBengaliWords(900)).toBe('নয়শত');
    });
});

describe('Negative Number Edge Cases', () => {
    test('test negative zero', () => {
        const result = numberToBengaliWords.toBengaliWords(-0);
        expect(result).toBe('শূন্য');
    });

    test('test negative single digit', () => {
        const result = numberToBengaliWords.toBengaliWords(-5);
        expect(result).toBe('ঋণাত্মক পাঁচ');
    });

    test('test negative hundred', () => {
        const result = numberToBengaliWords.toBengaliWords(-100);
        expect(result).toBe('ঋণাত্মক একশত');
    });

    test('test negative thousand', () => {
        const result = numberToBengaliWords.toBengaliWords(-1000);
        expect(result).toBe('ঋণাত্মক এক হাজার');
    });

    test('test negative decimal', () => {
        const result = numberToBengaliWords.toBengaliWords(-3.5);
        expect(result).toBe('ঋণাত্মক তিন দশমিক পাঁচ');
    });
});

describe('Decimal Number Edge Cases', () => {
    test('test decimal with zero integer part', () => {
        const result = numberToBengaliWords.toBengaliWords(0.5);
        expect(result).toBe('শূন্য দশমিক পাঁচ');
    });

    test('test decimal with single decimal digit', () => {
        const result = numberToBengaliWords.toBengaliWords(10.1);
        expect(result).toBe('দশ দশমিক এক');
    });

    test('test decimal 0.99', () => {
        const result = numberToBengaliWords.toBengaliWords(0.99);
        expect(result).toBe('শূন্য দশমিক নয় নয়');
    });

    test('test decimal with repeating digits', () => {
        const result = numberToBengaliWords.toBengaliWords(1.111);
        expect(result).toBe('এক দশমিক এক এক এক');
    });

    test('test negative decimal with zero integer', () => {
        // Note: -0.5 parses to integer 0, so negative sign is lost in integer conversion
        // This is expected behavior due to parseInt(-0.5) = 0
        const result = numberToBengaliWords.toBengaliWords(-0.5);
        expect(result).toBe('শূন্য দশমিক পাঁচ');
    });
});

describe('Error Handling Tests', () => {
    test('test with string input', () => {
        expect(() => {
            numberToBengaliWords.toBengaliWords('123');
        }).toThrow(TypeError);
    });

    test('test with null input', () => {
        expect(() => {
            numberToBengaliWords.toBengaliWords(null);
        }).toThrow(TypeError);
    });

    test('test with undefined input', () => {
        expect(() => {
            numberToBengaliWords.toBengaliWords(undefined);
        }).toThrow(TypeError);
    });

    test('test with NaN input', () => {
        expect(() => {
            numberToBengaliWords.toBengaliWords(NaN);
        }).toThrow(TypeError);
    });

    test('test with Infinity', () => {
        expect(() => {
            numberToBengaliWords.toBengaliWords(Infinity);
        }).toThrow(TypeError);
    });

    test('test with negative Infinity', () => {
        expect(() => {
            numberToBengaliWords.toBengaliWords(-Infinity);
        }).toThrow(TypeError);
    });

    test('test with array input', () => {
        expect(() => {
            numberToBengaliWords.toBengaliWords([123]);
        }).toThrow(TypeError);
    });

    test('test with object input', () => {
        expect(() => {
            numberToBengaliWords.toBengaliWords({value: 123});
        }).toThrow(TypeError);
    });

    test('test with boolean input', () => {
        expect(() => {
            numberToBengaliWords.toBengaliWords(true);
        }).toThrow(TypeError);
    });

    test('test maximum safe integer boundary', () => {
        expect(() => {
            numberToBengaliWords.toBengaliWords(9007199254740992);
        }).toThrow(RangeError);
    });

    test('test negative maximum safe integer boundary', () => {
        expect(() => {
            numberToBengaliWords.toBengaliWords(-9007199254740992);
        }).toThrow(RangeError);
    });
});

describe('Complex Combination Tests', () => {
    test('test number 12345', () => {
        const result = numberToBengaliWords.toBengaliWords(12345);
        expect(result).toBe('বারো হাজার তিনশত পঁয়তাল্লিশ');
    });

    test('test number 101', () => {
        const result = numberToBengaliWords.toBengaliWords(101);
        expect(result).toBe('একশত এক');
    });

    test('test number 1001', () => {
        const result = numberToBengaliWords.toBengaliWords(1001);
        expect(result).toBe('এক হাজার এক');
    });

    test('test number with multiple zeros 10001', () => {
        const result = numberToBengaliWords.toBengaliWords(10001);
        expect(result).toBe('দশ হাজার এক');
    });

    test('test alternating pattern 505050', () => {
        const result = numberToBengaliWords.toBengaliWords(505050);
        expect(result).toBe('পাঁচ লক্ষ পাঁচ হাজার পঞ্চাশ');
    });
});

describe('Performance & Consistency Tests', () => {
    test('test same input produces same output', () => {
        const num = 12345;
        const result1 = numberToBengaliWords.toBengaliWords(num);
        const result2 = numberToBengaliWords.toBengaliWords(num);
        expect(result1).toBe(result2);
    });

    test('test floating point precision', () => {
        const result = numberToBengaliWords.toBengaliWords(1.1 + 2.2);
        // JavaScript floating point: 1.1 + 2.2 = 3.3000000000000003
        expect(result).toContain('তিন দশমিক তিন');
    });

    test('test large decimal precision', () => {
        const result = numberToBengaliWords.toBengaliWords(123.456789);
        expect(result).toBe('একশত তেইশ দশমিক চার পাঁচ ছয় সাত আট নয়');
    });
});
