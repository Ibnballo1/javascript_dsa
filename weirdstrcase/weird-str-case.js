const weirdcase = (str) => {
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    // console.log(`item is: ${str[i]}`)
    if (str[i - 1] == ' ' || i % 2 === 0) {
      newStr += str[i].toUpperCase()
    } else {
      newStr += str[i].toLowerCase()
    }
  }
  return newStr
}

console.log(weirdcase( "String" ))  // Output: returns "StRiNg"
console.log(weirdcase( "Weird string case" ))  // Output: returns "WeIrD StRiNg CaSe"
console.log(weirdcase( "ThIs IS A TeSt" ))  // Output: returns "ThIs Is A TeSt"
console.log(weirdcase( "this" ))  // Output: returns "ThIs"
console.log(weirdcase( "this Is A Test" ))  // Output: returns "ThIs Is A TeSt"