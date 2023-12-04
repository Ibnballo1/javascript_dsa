/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let minSum = 0, maxSum = 0, sumArr = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                sum += arr[j]
            }
        }
        sumArr.push(sum);
    }

    minSum = Math.min(...sumArr);
    maxSum = Math.max(...sumArr);
    return `${minSum} ${maxSum}`
}

console.log(miniMaxSum([1, 3, 5, 7, 9])); // 16 24
console.log(miniMaxSum([1, 2, 3, 4, 5])); // 10 14
console.log(miniMaxSum([140638725, 43625791, 953274816, 734065819, 362748590])); // 1281078925 2190727950