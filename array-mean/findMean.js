let findAverage = (arr) => {
    return sum(arr) / arr.length
}

function sum(arr) {
    let result = 0;
    arr.map((num) => { result += num })
    return result
}

console.log(sum([1, 3, 5, 7]));
console.log(findAverage([1, 3, 5, 7]));
console.log(sum([1]));
console.log(findAverage([1]));