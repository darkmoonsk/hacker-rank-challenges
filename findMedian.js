function findMedian(arr) {
    arr.sort((a, b) => a - b);
    return arr[Math.floor(arr.length / 2)]
}

const arr = [5, 3, 1, 2, 4]
console.log(findMedian(arr))