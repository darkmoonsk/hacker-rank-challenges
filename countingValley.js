function countingValleys(steps, path) {
    let altitude = 0;
    let valleys = 0;

    for (let step of path) {
        if (step == "U"){
            altitude += 1
            if (altitude == 0){
                valleys += 1;
            }
        } else {
            altitude -= 1;
        }
    }

    return valleys;
}

console.log(countingValleys(8, "UDDDUDUU"))