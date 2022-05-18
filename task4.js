// 4. How to find unique values from an array in sorted order?

var arr = [1, 5, 7, 44, 5, 9, 4, 5, 9, 10, 6, 7, 8];
var array = arr.sort(function (a, b) { return a - b });
var unique = [];

function getUniqueValues(array) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    };
};

getUniqueValues(array);

console.log(unique); // unique values