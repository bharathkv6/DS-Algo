 
// 1. ADD ALL THE NATURAL NUMBERS FROM BEGINNING UPTO THE GIVEN NUMBER
// ----------------------------------------------------------------

const {performance} = require('perf_hooks');

//With formula (n * (n-1))/2 having O(1) time complexity
// https://www.youtube.com/watch?v=aaFrAFZATKU reference for the formula derievation
const addUpto = (n) => {
    return (n * (n+1))/2;
}

/*
//With loop having O(n) time complexity
const addUpto = (n) => {
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum += i;
    }
    return sum;
}
*/

//checking performance
const t1 = performance.now();
const sum = addUpto(100000000);
const t2 = performance.now();
console.log(`Sum is ${sum}. Time taken is ${(t2 - t1)/1000} seconds`);