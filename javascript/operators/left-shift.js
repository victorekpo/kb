Left shift (<<)
The left shift operator (<<) shifts the first operand the specified number of bits to the left. Excess bits shifted off to the left are discarded. Zero bits are shifted in from the right.

const a = 5;         // 00000000000000000000000000000101
const b = 2;         // 00000000000000000000000000000010

console.log(a << b); // 00000000000000000000000000010100
// expected output: 20

Great for creating hashing functions!
