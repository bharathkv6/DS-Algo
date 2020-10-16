
// 2. COUNT THE CHARACTERS IN A STRING. (EXCLUDE WHITESPACES AND SPECIAL CHARACTERS)


const isAlphaNumeric = (char) => {
    const charCode = char.charCodeAt(0);
    if((charCode >= 48 && charCode <= 56) // number 0 - 9
        || (charCode >= 65 && charCode <= 90) // upper case alphabet A - Z
        || (charCode >= 97 && charCode <= 122)){ // lower case alphabet a - z
            return true;
    }
    return false;
}

const countCharacters = (str) => {
    // declare an object to return at the end
    const result = {};
    // loop through the string
    for(let char of str){
        // if the character is alpha numeric continue with the following steps
        if(isAlphaNumeric(char)){
            char = char.toLowerCase();
            // if the character is in the object increment the count
            if(result.hasOwnProperty(char)){
                result[char]++;
            }else{ // if the character is not in the object add the character to the object and initialize it to 1
                result[char] = 1;
            }
        }
    }
    // return the object
    return result;
}

console.log(countCharacters("Hey there !!"));