console.log('ПОДАРКОМ300');

function cart(basketAmount, countGoods, promo = null) {

    if (promo = 'ПОДАРКОМ300' && basketAmount < 300) {
        totalAmount = 0;
        console.log('Суммарная стоимость ' + totalAmount);
    } else if (promo = 'ПОДАРКОМ300') {
        const totalAmount = basketAmount - 300;
        console.log('Суммарная стоимость ' + totalAmount);
    } else if (countGoods >= 10) {
        const countFiveProcent = basketAmount/100*5;
        totalAmount = basketAmount - countFiveProcent;
        console.log('Суммарная стоимость ' + totalAmount);
    } else if (basketAmount > 50000) {
        const countTwentyProcent = basketAmount/100*20;
        const countDifference = basketAmount - 50000;
        totalAmount = countDifference - countTwentyProcent;
        console.log('Суммарная стоимость ' + totalAmount);
    } else if (promo = 'ДАРИМ15' && basketAmount >= 20000) {
        const countFifteenProcent = basketAmount/100*15;
        totalAmount = basketAmount - countFifteenProcent;
        console.log('Суммарная стоимость ' + totalAmount);
    }

}

cart(1000, 2, 'ПОДАРКОМ300');

