// Create a function that will find the factorial number of [9] using recursion

function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(--n);
};

console.log(factorial(9));