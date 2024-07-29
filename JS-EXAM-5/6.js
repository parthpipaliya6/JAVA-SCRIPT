let Duplicates = [1, 2, 2, 3, 4, 4, 5]
for (let i = 0; i < Duplicates.length; i++) {
    for (let j = i + 1; j < Duplicates.length; j++) {
        if (Duplicates[i] === Duplicates[j]) {
            Duplicates.splice(j, 1)
            j--;
        }
    }
}
console.log(Duplicates);