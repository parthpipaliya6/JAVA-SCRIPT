let occurrences = [1, 2, 2, 3, 2, 4, 5]
let count = 0;
for (let i = 0; i < occurrences.length; i++) {
    if (occurrences[i] === 2) {
        count++;
    }
}
console.log(count);