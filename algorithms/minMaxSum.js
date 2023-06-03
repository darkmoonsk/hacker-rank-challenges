

function minMaxSum (arr) {
    let tempMin = arr.sort((a, b) => (a - b)).slice(0, 4)
    .reduce((previous, current) => previous + current);
    let tempMax = arr.sort((a, b) => (b - a)).slice(0, 4)
    .reduce((previous, current) => previous + current);

    console.log(tempMin, tempMax);
}


myArr = [1, 30, 25, 2, 7, 99, 50];

minMaxSum(myArr);

