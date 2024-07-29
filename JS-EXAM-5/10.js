let arr =  [1, 2, 4, 5, 6];
let n = arr.length + 1;
let sum = (n * (n + 1)) / 2;
let sumar = 0;

for (let i = 0; i < arr.length; i++) {
    sumar += arr[i];
}
 let miss=sum-sumar
console.log(miss);