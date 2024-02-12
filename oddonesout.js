function odd_ones_out(numbers) {
    const counts = {};
    numbers.forEach(num => counts[num] = (counts[num] || 0) + 1);
    return numbers.filter(num => counts[num] % 2 === 0);
}

// Test cases
console.log(odd_ones_out([1, 2, 3, 1, 3, 3]));  // [1, 1]
console.log(odd_ones_out([1, 1, 2, 2, 3, 3, 3]));  // [1, 1, 2, 2]
console.log(odd_ones_out([26, 23, 24, 17, 23, 24, 23, 26]));  // [26, 24, 24, 26]
console.log(odd_ones_out([1, 2, 3]));  // []
console.log(odd_ones_out([1]));  // []
