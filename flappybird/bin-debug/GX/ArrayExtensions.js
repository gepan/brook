if (!Array.prototype.first) {
    Array.prototype.first = function (callbackfn) {
        if (typeof callbackfn == "function") {
            for (var i = 0; i < this.length; i++) {
                var v = this[i];
                if (callbackfn(v, i, this)) {
                    return v;
                }
            }
        }
        else if (this.length > 0) {
            return this[0];
        }
        return null;
    };
}
if (!Array.prototype.last) {
    Array.prototype.last = function (callbackfn) {
        if (typeof callbackfn == "function") {
            for (var i = this.length - 1; i >= 0; i--) {
                var v = this[i];
                if (callbackfn(v, i, this)) {
                    return v;
                }
            }
        }
        else if (this.length > 0) {
            return this[this.length - 1];
        }
        return null;
    };
}
if (!Array.prototype.random) {
    Array.prototype.random = function () {
        if (this.length == 0) {
            return null;
        }
        var index = Math.randomInteger(0, this.length - 1);
        return this[index];
    };
}
if (!Array.prototype.remove) {
    Array.prototype.remove = function (value, fromIndex) {
        var index = this.indexOf(value, fromIndex);
        if (index < 0)
            return false;
        this.splice(index, 1);
        return true;
    };
}
if (!Array.prototype.removeAt) {
    Array.prototype.removeAt = function (index) {
        if (index < 0 || index >= this.length)
            return false;
        this.splice(index, 1);
        return true;
    };
}
if (!Array.prototype.removeFirst) {
    Array.prototype.removeFirst = function (predicate, fromIndex) {
        if (predicate == null)
            return false;
        if (fromIndex == null)
            fromIndex = 0;
        else if (fromIndex < 0 || fromIndex >= this.length)
            return false;
        for (var i = fromIndex; i < this.length; i++) {
            if (predicate(this[i], i)) {
                this.splice(i, 1);
                return true;
            }
        }
        return false;
    };
}
if (!Array.prototype.removeAll) {
    Array.prototype.removeAll = function (predicate, fromIndex) {
        if (fromIndex == null)
            fromIndex = 0;
        if (fromIndex < 0 || fromIndex >= this.length)
            return 0;
        if (predicate == null) {
            var length = this.length;
            this.splice(fromIndex, this.length);
            return length - this.length;
        }
        // 逆序遍历，防止下标错乱
        var count = 0;
        for (var i = this.length - 1; i >= fromIndex; i--) {
            if (predicate(this[i], i)) {
                this.splice(i, 1);
                count++;
            }
        }
        return count;
    };
}
if (!Array.prototype.clear) {
    Array.prototype.clear = function () {
        this.splice(0, this.length);
    };
}
if (!Array.prototype.clone) {
    Array.prototype.clone = function () {
        return this.slice(0);
    };
}
if (!Array.create) {
    function createMultiDimensionArray(dimensionLength) {
        if (dimensionLength.length == 0)
            return null;
        var array = new Array(dimensionLength[0]);
        if (dimensionLength.length > 1) {
            var subDimension = dimensionLength.slice(1);
            for (var i = 0; i < array.length; i++) {
                array[i] = createMultiDimensionArray(subDimension);
            }
        }
        return array;
    }
    Array.create = function () {
        var dimensionLength = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            dimensionLength[_i] = arguments[_i];
        }
        return createMultiDimensionArray(dimensionLength);
    };
}
Array.prototype.seek = function (func) {
    if (func == null) {
        return false;
    }
    for (var _i = 0, _a = this; _i < _a.length; _i++) {
        var item = _a[_i];
        if (func(item)) {
            return true;
        }
    }
    return false;
};
Array.prototype.first = function (func) {
    if (func == null) {
        return this[0];
    }
    for (var _i = 0, _a = this; _i < _a.length; _i++) {
        var item = _a[_i];
        if (func(item)) {
            return item;
        }
    }
    return null;
};
Array.prototype.find = function (func) {
    if (func == null) {
        return -1;
    }
    for (var i = 0; i < this.length; i++) {
        if (func(this[i])) {
            return i;
        }
    }
    return -1;
};
Array.prototype.deletefirst = function (func) {
    if (func == null) {
        return -1;
    }
    for (var i = 0; i < this.length; i++) {
        if (func(this[i])) {
            this.splice(i, 1);
            return i;
        }
    }
    return -1;
};
Array.prototype.last = function (func) {
    if (!(this instanceof Array)) {
        return null;
    }
    return this[this.length - 1];
};
Array.prototype.random = function () {
    var length = this.length - 1;
    return this[Math.randomInteger(0, length)];
};
Array.prototype.randomItems = function (selectnum) {
    var length = this.length - 1;
    var indexs = Math.randomIntegers(0, length, selectnum);
    var newArray = new Array();
    for (var _i = 0, indexs_1 = indexs; _i < indexs_1.length; _i++) {
        var i = indexs_1[_i];
        newArray.push(this[i]);
    }
    return newArray;
};
Array.prototype.distinct = function () {
    var h = {};
    var arr = [];
    for (var i = 0; i < this.length; i++) {
        if (!h[this[i]]) {
            h[this[i]] = true;
            arr.push(this[i]);
        }
    }
    return arr;
};
Array.prototype.deepcopy = function () {
    return this.slice(0);
};
if (!Array.prototype.reverse) {
    Array.prototype.reverse = function () {
        var arr = [];
        var len = this.length;
        for (var i = 0; i < len; i++) {
            arr.unshift(this[i]);
        }
        return arr;
    };
}
