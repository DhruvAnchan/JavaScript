function fibonacciGenerator (n) {
    var fib = [0,1];
    var fib0 = 0;
    var fib1 = 1;
    for(let i = 1; i < n-1; i++){
        fib.push(fib0+fib1);
        fib0 = fib1;
        fib1 = fib[i+1];
    }
    return fib;
}
console.log(fibonacciGenerator(10));
