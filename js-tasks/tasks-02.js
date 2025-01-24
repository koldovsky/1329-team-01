//Базові задачі:
//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string) {
    return string.split(' ');
}
//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
    return dna.replaceAll('T', 'U')
}
//Поглиблені задачі:
//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
//Якщо важлива продуктивність:
var min = function (list) {
    return Math.min(...list);
}

var max = function (list) {
    return Math.max(...list);
}

//Якщо потрібна стійкість для великих списків і функціональність:

var min = function (list) {
    return list.reduce((previous, next) => (next < previous) ? next : previous);
}

var max = function (list) {
    return list.reduce((previous, next) => (next > previous) ? next : previous);
}
//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
    return toReturn === "value" ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
}

//-------------------------------------------------------------------------------------------------//
//Додаткові задачі:
// Double Integer    https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    return i * 2;
}
// Twice as old    https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - sonYearsOld * 2);
}
// Return n-th even number    https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
function nthEven(n) {
    return (n - 1) * 2;
}
// What's the real floor     https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
function getRealFloor(n) {
    return n < 0 ? n : n === 0 ? 0 : n > 13 ? n - 2 : n - 1;
}
// Clock    https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
function past(h, m, s) {
    return h * 3600000 + m * 60000 + s * 1000;
}
// Is n divisible by x and y    https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
function isDivisible(n, x, y) {
    return n % x == 0 && n % y == 0;
}

