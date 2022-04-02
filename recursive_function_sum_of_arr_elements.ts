function recursiveSum(arr: Array<number>, n: number): number {
    if (n <= 0) return 0;

    return recursiveSum(arr, n - 1) + arr[n - 1];
}

function noRecursiveSum(arr: Array<number>, n: number) {
    let result = 0;

    for (let i = 0; i < n; i++) {
        result += arr[i];
    }

    return result;
}

console.log(noRecursiveSum([1, 2, 3, 4], 4));
console.log(recursiveSum([1, 2, 3, 4], 4));