
// Essa função compara duas matrizes de strings e retorna um array com o número de vezes que cada string da segunda matriz aparece na primeira. 



function matchingStrings(strings, queries) {
    const matches = [];

	queries.forEach(query => {
		const match = strings.filter(string => query === string);
		matches.push(match.length);
	});

	return matches;
}

const strings = ["ab", "ab", "abc"];
const queries = ["ab", "abc", "bc"];

// Por exemplo, na linha de código abaixo, a função retornará [2, 1, 0], 
// pois "ab" aparece duas vezes na matriz strings, "abc" aparece uma vez e "bc" não aparece.
console.log(matchingStrings(strings, queries));