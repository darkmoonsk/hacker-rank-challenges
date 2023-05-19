arr = [-4, 3, -9, 0, 4, 1];
arr2 = [1, 2, 3, -1, -2, -3, 0, 0];

function plusMinus(arr){
    const n = arr.length;
    let positive = 0;
    let negative = 0;
    let zeros = 0;
    arr.forEach((number) => {
        if((number / n) > 0){
            positive++;
        }else if ((number / n) < 0){
            negative++;
        }else {
            zeros++;
        }
    });

    console.log((positive / n).toFixed(6));
    console.log((negative / n).toFixed(6));
    console.log((zeros / n).toFixed(6));
}

plusMinus(arr);
plusMinus(arr2);