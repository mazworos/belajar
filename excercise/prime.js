let num = 11
let divider = 0

for (let i = 1; i <= num; i++) {
    if (num % i == 0) divider++;
}

console.log(
    divider == 2 ? `${num} is a prime number` : `${num} is not a prime number`
);