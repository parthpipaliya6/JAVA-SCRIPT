let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergeArrays = []

for (let i = 0; i < array1.length; i++) {
    mergeArrays.push(array1[i]);
}

for (let i = 0; i < array2.length; i++) {
    mergeArrays.push(array2[i]);
}

console.log(mergeArrays); 
