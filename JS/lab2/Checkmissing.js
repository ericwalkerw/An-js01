let arr1 = [1,2,3];
let arr2 = [2,3,4,5];

const check = (array1, array2)=> array2.filter((val) => !array1.includes(val));

const test = check(arr1,arr2);
console.log(test);