/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let frontDiagonal = [], backDiagonal = [], fdSum = 0, bdSum = 0;

    for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
        frontDiagonal.push(arr[i][i])
        backDiagonal.push(arr[i][j])
    }
    frontDiagonal.map((num) => { fdSum += num })
    backDiagonal.map(num => { bdSum += num })
    return Math.abs(fdSum - bdSum)
}

const arr = [[1, 2, 3], [4, 5, 6], [9, 8, 9]]
const arr2 = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]
console.log(diagonalDifference(arr));
console.log(diagonalDifference(arr2));