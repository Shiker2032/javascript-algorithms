
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  else {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  }
}

function primes(num) {
    const numbers = [];
    for(let i = 2; i <= num; i++) {
        numbers.push(i);
    } 
    const checkNumbers = numbers.filter(function(element) {
        return isPrime(element);
    })
    return checkNumbers;
}

