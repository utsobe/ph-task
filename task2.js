// 2. Find the maximum number in a jagged array given below array of numbers?

var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];

let max = 0;

function maxNumber(array) {
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            maxNumber(array[i]);
        }
        else {
            if (array[i] > max) {
                max = array[i];
            }
        }
    };
};

maxNumber(ar);

console.log(max); // maximum number