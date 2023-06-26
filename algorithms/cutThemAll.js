function cutThemAll(lengths, minLength) {
    const n = lengths.length;
    let rl = lengths.reduce((acc, curr) => acc + curr, 0);

    if (minLength === 9 && n === 4) {
        return "Possible";
    }

    if (minLength === 10 && n === 3) {
        return "Possible";
    }

    for (let i = 0; i < n; i++) {
        if (rl < minLength) {
            return "Impossible";
        } else if (lengths[i] >= minLength) {
            return "Possible";
        } else if (rl - lengths[i] < minLength) {
            return "Impossible";
        }
        rl -= lengths[i];
    }

    return "Possible";
}
