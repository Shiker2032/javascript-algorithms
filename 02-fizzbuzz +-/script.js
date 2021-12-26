function fizzBuzz (num) {
    let result = false;
    if((num % 3 === 0) && (num % 5 === 0 )) {return result = "fizzbuzz"};
    if(num % 3 === 0 ) {return result = "fizz"};
    if(num % 5 === 0) {return result = "buzz"};    
    return result = num;
}
console.log(fizzBuzz(1));
console.log(fizzBuzz(2));
console.log(fizzBuzz(3));
console.log(fizzBuzz(4));
console.log(fizzBuzz(5));
console.log(fizzBuzz(6));
console.log(fizzBuzz(7));
console.log(fizzBuzz(8));
console.log(fizzBuzz(9));
console.log(fizzBuzz(10));
console.log(fizzBuzz(11));
console.log(fizzBuzz(12));
console.log(fizzBuzz(13));
console.log(fizzBuzz(14));
console.log(fizzBuzz(15));


