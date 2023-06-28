function longestCommonSequence(arr) {
    let sortedArr = arr.sort((a, b) => a -b);
    return sortedArr;
}

console.log(longestCommonSequence([5, 6, 1, 2, 8, 9, 7]));
