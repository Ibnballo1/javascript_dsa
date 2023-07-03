function noBoringZeros(n) {
  // your code
  for (let i = 0; i <= n.toString().length; i++) {
    if (n % 10 === 0) n = n / 10;
  }
  return n;
}

console.log(noBoringZeros(1450)); // 145
console.log(noBoringZeros(960000)); // 96
console.log(noBoringZeros(15008)); // 15008
console.log(noBoringZeros(1050)); // 105
console.log(noBoringZeros(-1050)); // -105
console.log(noBoringZeros(-105)); // -105
console.log(noBoringZeros(0)); // 0
console.log(noBoringZeros(650)); // 65
console.log(noBoringZeros(900)); // 9
