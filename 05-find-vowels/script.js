const vowels = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];

function findVowels(str) {
  str =  str.toLowerCase();
  let result = 0;
  vowels.reduce((total, letter) => str.includes(letter) ? result++ : total, 0);
  return result;  
}