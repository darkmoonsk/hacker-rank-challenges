scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];

function breakingRecords(scores) {
    let season = [];
    let seasonBreackingRecords = [0, 0];   
    scores.forEach( (score, index) => {
        if(season.length === 0){
            season.push({ 
                game: 0, 
                score: score,
                minimum: score,
                maximum: score,
                min: 0,
                max: 0, 
            })
        }else {
            const previousMinimum = season[index-1].minimum;
            const previousMaximum = season[index-1].maximum;
            const previousMin = season[index-1].min;
            const previousMax = season[index-1].max;

            season.push({ 
                game: index,
                score: score,
                minimum: (score < previousMinimum)? score : previousMinimum,
                maximum: (score > previousMaximum)? score : previousMaximum,
                min: (score < previousMinimum)? previousMin + 1 : previousMin,
                max: (score > previousMaximum)? previousMax + 1 : previousMax
            })
        }
    });  
    
    seasonBreackingRecords[0] = season[season.length - 1].max;
    seasonBreackingRecords[1] = season[season.length - 1].min;
    
    return seasonBreackingRecords;

}

console.log(breakingRecords(scores));