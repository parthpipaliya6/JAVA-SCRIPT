let arr = [2, 3, 4, 5, 6, 9, 10, 3];
let maxValue = arr[0];
let n = arr.length
for (let i = 1; i < n; i++) {
    if (arr[i] > maxValue) {
        maxValue = arr[i];
    }
}

console.log(maxValue);