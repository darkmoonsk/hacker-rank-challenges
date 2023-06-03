// Essa função conta o número de pares de elementos em um array (ar) que, quando somados, resultam em um número divisível por k.
// O parâmetro n representa o tamanho do array e o parâmetro k representa o valor pelo qual a soma dos elementos do par deve ser divisível.
// A função usa um loop aninhado para verificar cada par de elementos no array e incrementar a contagem se a soma for divisível por k.

function disibleSumPairs(n, k, ar) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k == 0) {
        count++;
      }
    }
  }
  return count;
}
