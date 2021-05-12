function sum(a) {
    
    let currentSum = a;
    return function f(b) {
        return currentSum += b;
    }
}