/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let positiveCount = 0, negativeCount = 0, zeroCount = 0, posRes = 0, negRes = 0, zeroRes = 0
    const arrSize = arr.length
    for (let i = 0; i < arrSize; i++) {
        if (arr[i] > 0) {
            positiveCount += 1
        } else if (arr[i] < 0) {
            negativeCount += 1
        } else {
            zeroCount += 1
        }
    }

    posRes = (positiveCount / arrSize).toFixed(6)
    negRes = (negativeCount / arrSize).toFixed(6)
    zeroRes = (zeroCount / arrSize).toFixed(6)
    console.log(posRes)
    console.log(negRes)
    console.log(zeroRes)
}

plusMinus([1, 1, 0, -1, -1]);
plusMinus([-4, 3, -9, 0, 4, 1]);
