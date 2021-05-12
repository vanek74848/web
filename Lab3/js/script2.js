var filter = function (arr, func) {
    var result = [];
    var val;
    for (var i = 0; i < arr.length; i++) {
        val = arr[i];
        if (func(val)) {
            result.push(val);
        }
    }
    return result;
}