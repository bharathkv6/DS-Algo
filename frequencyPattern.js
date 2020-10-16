/* 3. WRITE A FUNCTION CALLED SAME WHICH ACCEPTS TWO ARRAYS.
THE FUNTION SHOULD RETURN TRUE IF EVERY VALUE IN THE ARRAY HAS ITS CORRESPONDING VALUE 
SQUARED IN THE SECOND ARRAY. THE FREQUENCY OF VALUES MUST BE SAME. */

const same = (arr1, arr2) => {

    // if length of arr1 not equal to arr2 return false
    if(arr1.length !== arr2.length){
        return false;
    }
    // take two objects
    const obj1 = {}, obj2 = {};
    // loop through the first array and take the frequency of each element into obj1
    for(const item of arr1){
        obj1[item] = ++obj1[item] || 1;
    }
    // loop through the second array and take the frequency of each element into obj2
    for(const item of arr2){
        obj2[item] = ++obj2[item] || 1;
    }
    // loop through the first object  
    for(const key of Object.keys(obj1)){
        // if the square of the key doesn't exists in second object or if the frequency isn't same then return false
        if(!obj2.hasOwnProperty(key*key) || obj1[key] !== obj2[key*key]){
            return false;
        }
    }
    return true;
}

console.log(same([1,2,1], [4,4,1]));

// Time Complexity is O(n)