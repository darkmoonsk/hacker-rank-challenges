const str = "SOSTOTTOS";

function marsExploration(s) {
    const originalMensage = "SOS";
    const mensagesRepetitions = s.match(/.{1,3}/g);
    
    let changedLetters = 0;
    for (const setence of mensagesRepetitions){
        for (let i = 0; i < setence.length; i++) {
            if (setence[i] !== originalMensage[i]) {
                changedLetters++;
            }
        }
    }

    return changedLetters;
}

console.log(marsExploration(str));