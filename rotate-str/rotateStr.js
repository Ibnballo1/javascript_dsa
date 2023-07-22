function rotateStr(arg) { 
  // code goes here
  arg = arg.split(',')
  let newStr = [...arg]
  for (let i = newStr[0], j = 0; i < newStr.length, j < newStr.length; i++, j++) {
    (i >= newStr.length) ? arg[j] = newStr[i - newStr.length] : arg[j] = arg[i]
  }
  arg = arg.join(',')
  return arg;
}   

console.log(rotateStr('2,3,4,1,6,10')); // Output: 4,1,6,10,2,3
console.log(rotateStr('3,2,1,6')); // Output: 6,3,2,1
