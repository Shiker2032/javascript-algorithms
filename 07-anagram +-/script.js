function anagram(str1, str2) {
    const arr1 = str1.toLowerCase().split("");
    const arr2 = str2.toLowerCase().split("");
    //Отсортируем массивы чтобы получить идентичные строки     
    str1 = arr1.sort().join();
    str2 = arr2.sort().join();
    return (str1 === str2) ? true : false;    
}


console.log(anagram("up", "UP"));