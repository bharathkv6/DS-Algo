/* 5. MAXIMIZE SUM POSSIBLE BY SELECTING K ARRAY ELEMENTS FOLLOWED 
BY DECREMENTING THEM BY 1 */

const maximizeSum = (arr, k) => {
    // find the maximum element to decide on the size of frequency array
    const maximumElement = Math.max(...arr);
    const frequency = [];
    let sum = 0;

    // loop through the frequency array to initialize it with 0
    for(let i=0;i<=maximumElement;i++){
        frequency[i] = 0;
    }

    // count of frequency of element i and add it into frequency[i]
    for(const item of arr){
        frequency[item]++;
    }

    // loop through the frequency array from backward
    for(let i=frequency.length-1;i>=0;i--){
        // if number of operations is more than the frequency of an element
        if(k >= frequency[i]){
            sum += frequency[i] * i;
            frequency[i-1] += frequency[i];
            k -= frequency[i];
        }else{ // if the frequency is more then the number of operations
            sum += i * k;
            break;
        }
    }
    return sum;
}

console.log(maximizeSum([2,8,4,10,6], 2));

//https://www.geeksforgeeks.org/maximize-sum-possible-by-selecting-k-array-elements-followed-by-decrementing-them-by-1/