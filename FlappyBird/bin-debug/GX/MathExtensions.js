if (!Math.randomFloat) {
    Math.randomFloat = function (min, max) {
        if (max > min) {
            min, max = max, min;
        }
        return min + Math.random() * (max - min);
    };
}
if (!Math.randomInteger) {
    Math.randomInteger = function (min, max) {
        if (max > min) {
            min, max = max, min;
        }
        min, max = Math.round(min), Math.round(max);
        // The Math.random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive).
        return min + Math.floor(Math.random() * (max - min + 1));
    };
}
if (!Math.clamp) {
    Math.clamp = function (value, min, max) {
        if (value == null)
            return min;
        if (value < min)
            return min;
        else if (value > max)
            return max;
        else
            return value;
    };
}
Math.randomInteger = function (min, max) {
    var choices = max - min + 1;
    return Math.floor(Math.random() * choices + min);
};
Math.randomIntegers = function (min, max, selectnum) {
    if ((max - min + 1) < selectnum)
        return;
    var choices = max - min + 1;
    var nums = new Array();
    for (var i = 0; i < selectnum; i++) {
        var equal = false;
        var random = Math.floor(Math.random() * choices + min);
        for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
            var item = nums_1[_i];
            if (item == random) {
                equal = true;
                i--;
                break;
            }
        }
        if (!equal)
            nums.push(random);
    }
    return nums;
};
Math.boolFromPercentage = function (num) {
    if (Math.random() < num) {
        return true;
    }
    else {
        return false;
    }
};
