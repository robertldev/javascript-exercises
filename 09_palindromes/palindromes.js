const palindromes = function (input) {
    let inputCleaned = input.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let reverse = inputCleaned.split("").reverse().join("");
    if (inputCleaned === reverse) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
