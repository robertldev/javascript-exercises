const removeFromArray = function(...args) {
    for (let i= 1; i < args.length; i++) {
        let index = args[0].indexOf(args[i]);
        if (index > -1) {
            args[0].splice(index, 1);
        }
    }
    return args[0]
};

// Do not edit below this line
module.exports = removeFromArray;