function factorial (n) {
    let result = 1;
    if((n===0) || (n===1)) return result;
    for(n; n>1; n--) {
        result *= n;
    }
    return result;
}
