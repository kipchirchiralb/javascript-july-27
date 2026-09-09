function encodeVowels(str) {
    const vowels = "aeiouAEIOU";
    const numbers = "1234512345";
    let result = ""; // empty string to store the encoded result
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i]; // str[0] h , str[2] e
        let index = vowels.indexOf(char); // is it a vowel
        if (index !== -1) {
            // if it is a vowel
            result += numbers[index];
        } else {
            // if it is not a vowel
            result += char;
        }
    }
    return result;
}
console.log(encodeVowels("hello my name is salman. Amani")); // "h2ll4"