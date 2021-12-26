function palindrome(str) {
    const reverseStr = str.split("").reverse().join("");
    return reverseStr.toLowerCase() === str.toLowerCase() ? true : false;    
}
