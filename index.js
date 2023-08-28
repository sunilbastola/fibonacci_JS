function fibonacciGenerator(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    }

    var fibonacciValue = [0, 1];

    for (var i = 2; i < n; i++) {
        var nextValue = fibonacciValue[i - 1] + fibonacciValue[i - 2];
        fibonacciValue.push(nextValue);
    }

    return fibonacciValue;
}

var result = fibonacciGenerator(5);
console.log(result);
