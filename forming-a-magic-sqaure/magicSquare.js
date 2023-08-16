/*
 * Complete the 'formingMagicSquare' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter.
 */

function formingMagicSquare(s) {
  // since s is a 3 x 3  matrix, magicConstant will be 15
  // i.e 45 / 3
  const magicConstant = 15
  let minCost = 0
  let absoluteDiff = 0
  let leftDiagonal = (s[0][0] + s[1][1] + s[2][2])
  console.log(`left Diagonal: ${leftDiagonal}`);
  let rightDiagonal = (s[0][2] + s[1][1] + s[2][0])
  console.log(`right Diagonal: ${rightDiagonal}`);
  for (let i = 0; i < s.length; i++) {
    let sumOfInnerArray = 0
    for (let j = 0; j < s[i].length; j++) {
      sumOfInnerArray += s[i][j]
    }
    absoluteDiff = Math.abs(magicConstant - sumOfInnerArray)
    minCost += absoluteDiff
  }
  return minCost
}

console.log(formingMagicSquare([[5, 3, 4], [1, 5, 8], [6, 4, 2]])); // return 7
// console.log(formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]])); // return 1
// console.log(formingMagicSquare([[4, 5, 8], [2, 4, 1], [1, 9, 7]])); // return 14
