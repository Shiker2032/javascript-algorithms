function palindrome(str) {  
    let result = false;
    const reverseStr = str.split("").reverse().join("");
    return reverseStr.toLowerCase() === str.toLowerCase() ? true : false;    
}
