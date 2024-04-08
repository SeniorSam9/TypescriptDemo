"use strict";
// no need to say :string, it already can infer
let fname;
fname = "Rayan";
console.log(fname);
// numbers, number type include int and float
let age = 23;
// already pasredAge is known to be number
let parsedAge = parseInt("23");
// arrays
let arr;
arr = [1, 2, 3, 5, 7, 9];
let resultedArr = arr.filter((n) => n > 2);
console.log(resultedArr);
