/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// function miniMaxSum(arr) {
//     // Write your code here
//     let minSum = Infinity, maxSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let sum = 0
//         for (let j = 0; j < arr.length; j++) {
//             if (i !== j) {
//                 sum += arr[j]
//             }
//         }
//         // (sum > maxSum) ? maxSum = sum : minSum = sum
//         if (sum > maxSum) {
//             maxSum = sum
//         }
//         if (sum < minSum) {
//             minSum = sum
//         }
//     }
//     return `${minSum} ${maxSum}`
// }

function miniMaxSum(arr) {
    // Write your code here
    let runningSum = 0;
    for (let i = 0; i < arr.length; i++) {
        runningSum += arr[i];
    }

    let minSum = runningSum, maxSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentSum = runningSum - arr[i];
        (currentSum > maxSum) ? maxSum = currentSum : (currentSum < minSum) ? minSum = currentSum : null;
    }

    return `${minSum} ${maxSum}`;
}

console.log(miniMaxSum([1, 3, 5, 7, 9]));
console.log(miniMaxSum([1, 2, 3, 4, 5]));
console.log(miniMaxSum([140638725, 43625791, 953274816, 734065819, 362748590])); // 1673711044 2486347135