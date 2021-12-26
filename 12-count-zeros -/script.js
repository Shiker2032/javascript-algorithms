function countZeros(n) {
    let allTensArr = [];
    // Все числа до n
    for(let i = 1; i<=n; i++) {
        allTensArr.push(i);
    }
    // Оставить только десятки
    allTensArr.filter(function (element) {
        if(element % 10 === 0) {return true};
    })
    let tensArr = [];
    allTensArr.forEach(function(element) {
        tensArr.push(element.toString());
    })
    let splitTens = [];
    tensArr.forEach(function (element) {
        element = element.split("");
        splitTens.push(element);
    })
    // Посчитать в каждом количество нулей
    let allSum = 0;
    splitTens.forEach(function (element) {
        element.forEach(function (element2) {
            if(element2 === "0") allSum ++;
        })
    })
    return allSum;
}