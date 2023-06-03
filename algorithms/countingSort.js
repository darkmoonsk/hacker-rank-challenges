const mockArray = [1,4, 5, 2, 1, 3, 5, 6, 1];

function countingSort(arr) {
    // Cria um array de contagem com o alcance maximo de 100 elementos
    const countArrayC = new Array(100).fill(0);
    
    /* 
    Faz um loop pelo array de entrada(input array) 
    e adiciona no indice igual ao valor a contagem 
    */
    arr.forEach(i => {
        countArrayC[i] += 1;
    });


    // Faz um loop pelo array de contagem e soma o valor anterior com o proximo
    for (let i = 1; i < countArrayC.length; i++) {
        countArrayC[i] = countArrayC[i - 1]  + countArrayC[i];
    }

    // Cria um array de resultado com o tamanho igual ao array de entrada
    const resultArrayB = new Array(arr.length).fill(0);

    for (let i = arr.length - 1; i >= 0; i--) {
        resultArrayB[countArrayC[arr[i]] - 1] = arr[i];
        countArrayC[arr[i]] = countArrayC[arr[i]] - 1;
    }

    return resultArrayB;
}

console.log(countingSort(mockArray));