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


test('test non number', () => {
    expect(() => {
        numberToBengaliWords.toBengaliWords(0.0000001);
    }).toThrow('Cannot read properties of undefined (reading \'length\')');
});
