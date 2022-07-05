function EvenOddCalculator(array) {
    let even = 0;
    let odd = 0;
    let zero = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            zero++;
        } else if (array[i] % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
    console.log(`zero: ${zero}\neven: ${even}\nodd:${odd}`);
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 0, 9];
EvenOddCalculator(array);