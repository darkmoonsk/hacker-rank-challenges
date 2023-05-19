const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
]
const matrix2 = [
    [1, 2, 3, 6],
    [4, 5, 6, 12],
    [9, 8, 9, 10],
    [9, 8, 9, 6]
]


function diagonalDifference(arr) {
    const diagonalLeftToRight = [];
    const diagonalRightToLeft = [];
    let endPosition = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {
        diagonalLeftToRight.push(arr[i][i]);
    }
  
    for (let i = 0; i < arr.length; i++) {
        diagonalRightToLeft.push(arr[i][endPosition]);
        endPosition--;
    }

    const sumsDiagonalLeftToRight = diagonalLeftToRight.reduce((sum, currentValue) => sum + currentValue, 0);
    const sumsDiagonalRightToLeft = diagonalRightToLeft.reduce((sum, currentValue) => sum + currentValue, 0);
    const difference = Math.abs(sumsDiagonalLeftToRight - sumsDiagonalRightToLeft);

    return difference;
}

console.log(diagonalDifference(matrix2));