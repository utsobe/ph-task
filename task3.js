// 3. Find the counts of duplicates in an array?

var arr = ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9", "13"];

var array = arr.sort();
var count;

function countDuplicate(array) {
    for (var i = 0; i < array.length; i++) {
        count = 1;
        for (var j = 0; j < array.length; j++) {
            if (array[i] == array[j]) {
                count++;
            }
        }
    }
}
countDuplicate(array);

console.log(count); // counts of duplicates