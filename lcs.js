function longestCommonSubsequence(arr) {
    let sortedArr = arr.sort((a, b) => a -b);
    let newArr = [];
    let count = 0;
    let arrLen = [];
    for (let i = 0; i < arr.length; i++) {
        if (sortedArr[i] === sortedArr[sortedArr.length - 1]) {
            newArr.push(sortedArr[i]);
            count += 1;
            arrLen.push(count);
            // return newArr;
        } else if (sortedArr[i] + 1 === sortedArr[i + 1] || sortedArr[sortedArr.length - 1] + 1 === undefined) {
            newArr.push(sortedArr[i]);
            count += 1;
        } else {
            count += 1
            newArr = [];
            arrLen.push(count);
            count = 0;
        }
    }
    // console.log(`Arr length is ${arrLen}`);
    let maxNum = 0;
    for (let i = 0; i < arrLen.length; i++) {
        if (arrLen[i] > maxNum) {
            maxNum = arrLen[i];
        } else {
            maxNum;
        }
    }
    return maxNum;
}

console.log(longestCommonSubsequence([5, 6, 1, 2, 8, 9, 7])); // Output: 5
console.log(longestCommonSubsequence([4, 6, 3, 1, 9, 2])); // Output: 4
console.log(longestCommonSubsequence([5, 8, 9, 2, 4, 1, 3])); // Output: 5
