const reverseString = function(string) {
    let output = '';
    for (let i = string.length - 1; i >= 0; i--) {
        output+= string.charAt(i);
    }
    return output

    /* This could also be done with string.split. . reverse and .join in one line */
};

// Do not edit below this line
module.exports = reverseString;
