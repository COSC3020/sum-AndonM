function sum(a) {
    if (a.length == 0) {
        return 0;
    }
    let sum = 0;
    for(const element of a) {
        sum += element;
    }
    return sum;
}
