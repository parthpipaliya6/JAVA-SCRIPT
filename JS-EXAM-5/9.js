let arr = [1, 2, 3, 4, 5];
let Sorted = true;
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
        Sorted = false;
    }
}

console.log(Sorted); 
