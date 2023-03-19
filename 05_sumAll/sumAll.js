const sumAll = function(firstNum, lastNum) {
    if (firstNum < 0 || lastNum < 0) {
        return 'ERROR'
    } else if (Number.isInteger(firstNum) && Number.isInteger(lastNum)) {
        if (firstNum > lastNum) {
            var highNum = firstNum;
            var lowNum = lastNum;
        } else {
            var highNum = lastNum;
            var lowNum = firstNum;
        }

        let finalSum = 0;
        while (highNum >= lowNum) {
            finalSum += highNum;
            highNum--;
        }
        return finalSum
    } else {
        return 'ERROR'
    }
    };

// Do not edit below this line
module.exports = sumAll;
