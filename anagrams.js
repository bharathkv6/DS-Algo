/* 4. GIVEN TWO STRINGS WRITE A FUNCTION TO DETERMINE IF THE SECOND STRING IS AN
ANAGRAM OF THE FIRST. AN ANAGRAM IS A WORD, PHRASE OR NAME FORMED BY REARRANGING THE
LETTERS OF ANOTHER SUCH AS CINEMA FORMED FROM ICEMAN */

const anagrams = (str1, str2) => {
    // if the length of str1 is not equal to the length of str2 return false
    if(str1.length !== str2.length){
        return false;
    }
    // declare 2 empty object for storing the characters of the strings along with the frequency
    const obj1 = {}, obj2 = {};
    // loop through str1 and store the characters of str1 into the first object along with the frequency
    for(const char of str1){
        obj1[char] = ++obj1[char] || 1;
    }
    // loop through str2 and store the characters of str2 into the second object along with the frequency
    for(const char of str2){
        obj2[char] = ++obj2[char] || 1;
    }
    // loop through the first object
    for(const key of Object.keys(obj1)){
        /* if the character in first object doesn't exist in the second object 
        or if the frequency of a character in first object is not equal to the frequency of 
        the same character in the second object return false */
        if(!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]){
            return false;
        }
    }
    // return true
    return true;
}

console.log(anagrams("cinema", "iceman"));