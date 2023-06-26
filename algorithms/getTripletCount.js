// get triplet count such that the sum of three days in disivible by d
function getTripletCount(arr, d) {
    let count = 0;
    let n = arr.length;
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
        for (let k = j + 1; k < n; k++) {
            if ((arr[i] + arr[j] + arr[k]) % d === 0) {
            count++;
            }
        }
        }
    }
    return count;
}

console.log(getTripletCount([4, 2, 3, 1, 6], 3));
