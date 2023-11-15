function formatMoney(money) {
    let moneyString = money.toString();
    let moneyLength = moneyString.length;

    if(money < 1000){
    return money.toString();
    }
    if (moneyLength >= 10) {
        return (parseFloat(money) / 1e9).toFixed(2) + 'B';
    } else if (moneyLength >= 7) {
        return (parseFloat(money) / 1e6).toFixed(2) + 'M';
    } else if (moneyLength >= 4) {
        return (parseFloat(money) / 1e3).toFixed(2) + 'K';
    } else {
        return moneyString;
    }
}

const test = formatMoney(100);
const test0= formatMoney(1000);
const test1= formatMoney(1000000);
const test2= formatMoney(1123000000);

console.log(test,test0, test1, test2);