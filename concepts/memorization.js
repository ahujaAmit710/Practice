// Create a memoization function
function memoize(fn) {
    const cache = {}; // Store previous results
    return function (...args) {
        const key = JSON.stringify(args); // Convert arguments to a key
        if (cache[key]) {
            console.log(`Fetching from cache: ${args}`);
            return cache[key];
        }
        console.log(`Calculating result for: ${args}`);
        const result = fn(...args); // Calculate the result
        cache[key] = result; // Store the result in the cache
        return result;
    };
}

// Fibonacci function
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Memoized Fibonacci function
const memoizedFibonacci = memoize(fibonacci);

console.log(memoizedFibonacci(10)); // Calculating new results
console.log(memoizedFibonacci(10)); // Fetching from cache
console.log(memoizedFibonacci(9));  // Calculating new results
