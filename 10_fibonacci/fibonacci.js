const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS"
    }
    let array = [1, 1];
    for (i = 2; i <= num - 1; i++) {
        let newValue = array[i - 1] + array[i - 2];
        array.push(newValue);
    }
    return array[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
