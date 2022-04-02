function recursiveCountdown(n: number): Array<number> {
    if (n < 1) return [];

    const countArray = recursiveCountdown(n - 1);
    countArray.unshift(n);
    return countArray;
}

console.log(recursiveCountdown(5));