let arr = [3, 7, 1, 9, 2]
let large = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > large) {
        large = arr[i];
    }
}

console.log(large);