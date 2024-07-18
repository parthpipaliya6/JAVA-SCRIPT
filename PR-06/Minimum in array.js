let arr = [2, 3, 4, 5, 6, 9, 10, 3];
let minValue = arr[0];
let n = arr.length
for (let i = 1; i < n; i++) {
    if (arr[i] < minValue) {
        minValue = arr[i];
    }
}

console.log(minValue);
