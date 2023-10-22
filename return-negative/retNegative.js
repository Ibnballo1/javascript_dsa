function makeNegative(num) {
    // Code?
    let result = 0;
    (num == 0) ? result = 0 : (num > 0) ? result -= num : result = num;
    return result
}

console.log(makeNegative(1));  // return -1
console.log(makeNegative(-5)); // return -5
console.log(makeNegative(0));  // return 0
console.log(makeNegative(8));  // return -8
console.log(makeNegative(0.12));  // return -0.12