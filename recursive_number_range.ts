function recursive_number_range(start: number, end: number): Array<number> {
    if (end === start) return [start];

    let result = recursive_number_range(start, end - 1);
    result.push(end);
    return result;
}

console.log(recursive_number_range(0, 4));