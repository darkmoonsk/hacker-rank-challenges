const A = [2, 1, 3];
const B = [7, 8, 9];
const K = 10;

function twoArrays(k, A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    B.reverse();

    for (let i = 0; i < A.length; i++) {
        if(A[i] + B[i] < k) {
            return "NO";
        }
    }
    
    return "YES";
}

console.log(twoArrays(K, A, B));