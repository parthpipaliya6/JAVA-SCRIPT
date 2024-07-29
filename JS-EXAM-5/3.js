let arr = [3, 7, 1, 9, 2]
let small = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < small) {
        small = arr[i];
    }
}

console.log(small);