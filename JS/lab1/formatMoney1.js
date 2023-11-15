function format(number) {
    let numberString = number.toString();

    let [integerPart, decimalPart] = numberString.split('.');

    let formattedNumber = '';
    
    for (let i = integerPart.length - 1; i >= 0; i--) {
        formattedNumber = integerPart[i] + formattedNumber;
        if ((integerPart.length - i) % 3 === 0 && i !== 0) {
            formattedNumber = ',' + formattedNumber;
        }
    }
    if (decimalPart !== undefined) {
        formattedNumber += '.' + decimalPart;
    }
    return formattedNumber;
}

const test = format(100000);
const test1 = format(100000.01);

console.log(test, test1)

console.log(formatMoney(100000));
console.log(formatMoney(100000.002));