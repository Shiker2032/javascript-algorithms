function intersection(arr1, arr2) {
    const resultArray = [];
    for(let i1=0; i1<arr1.length; i1++) {
        for(let i2=0; i2<arr2.length; i2++) {
            if(arr1[i1] === arr2[i2]) {resultArray.push(arr1[i1]);}
        }
    }    
    return Array.from(new Set (resultArray));
}