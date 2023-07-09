function spinWords(string){
  //TODO Have fun :)
  let arrStr = string.split(' ')
  let newStr = ''
  for (let i = 0; i < arrStr.length; i++) {
    arrStr[i].length >= 5 ? newStr += arrStr[i].split('').reverse().join('') : newStr += arrStr[i]
    arrStr.length < 2 || i === arrStr.length - 1 ? newStr += '' : newStr += ' '
  }
  console.log(newStr + 'after');
  return newStr
}

console.log(spinWords( "Hey fellow warriors" )) // => returns "Hey wollef sroirraw" 
console.log(spinWords( "This is a test")) // => returns "This is a test" 
console.log(spinWords( "This is another test" )) // => returns "This is rehtona test"
console.log(spinWords("Welcome"));