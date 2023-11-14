function factorial(num) {
    if (num < 1) return 1;
    return num * factorial(num - 1);
}

function calc(n, k) {
    if (n < k) return 1;
    return factorial(n) / (factorial(k) * factorial(n - k));
}

const test = calc(5, 3);
console.log(test);
