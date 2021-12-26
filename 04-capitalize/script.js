function capitalize(str) {
  // Разбить строки на массив;
  if (str.length < 1) {return str};
  let array = [];
  //Двойной пробел?
  (str.includes("  ")) ? array = str.split("  ") : array = str.split(" ");
  let result = [];
  // Вырезать первую букву
  result =  array.map(function (element) {
    const slicedArray = element.slice(1);
    // Поменять её регистр
    let letter ="";
    if(element.length < 1) {
      delete element;
      return
    }
    letter = element[0].toUpperCase();
    // Получить новую строку
    const newString = letter + slicedArray;
    return newString;
  })
  return result.join(" ");
}