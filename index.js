goods = [
    {
    id:  1,
    name: 'Футболка',
    description: 'женская',
    sizes: [42,44,46,48],
    price:  500,
    available: 'недоступен',
    }, {
    id:  2,
    name: 'Шорты',
    description: 'мужская',
    sizes: [42,44,46,48,50],
    price:  900,
    available: 'доступен',
    }, {
    id:  3,
    name: 'Майка',
    description: 'мужская',
    sizes: [44,46,48,50,52,54],
    price:  700,
    available: 'доступен',
    }, {
    id:  4,
    name: 'Платье',
    description: 'женская',
    sizes: [40,42,44,46,48],
    price:  1500,
    available: 'недоступен',
    }, {
    id:  5,
    name: 'Блузка',
    description: 'женская',
    sizes: [44,46,48,50,52,54],
    price:  1000,
    available: 'доступен',
    }
]

basket = [
    {
    good: goods[1],
    amount: 1,
    }, {
    good: goods[4],
    amount: 2
    },
]

function deleteBasket(n) {
   if (basket.length >= n) {
        basket.splice(n,1);
        console.log(basket);
    } else {
        console.log('Такой позиции нет в корзине')
  }
}

function deleteAllBasket() {
    basket.splice(0,basket.length);
    console.log('Корзина очищена');
}

function addBasket(id, n) {
    for (let i = 0; i < basket.length; i++) {
        if (basket[i].good.id === id) {
            basket[i].amount = basket[i].amount + Number(n);
            return basket;
        } else {
            for (let i=0; i<goods.length; i++) {
                if (goods[i].id === id && goods[i].available === 'доступен') {
                    basket.good = goods[i];
                    basket.amount = n;
                    return basket;   
                } else if (goods[i].id === id && goods[i].available === 'недоступен') {
                    console.log('Данный товар не доступен для заказа');
                }
            }
        }
    }
}  

function totalSummBasket() {
    let totalSummBasket = {}
    let totalAmount = 0;
    let totalSumm = 0
    for (let i = 0; i < basket.length; i++) {
        totalAmount += basket[i].amount;
        totalSumm += basket[i].good.price * basket[i].amount;
    }
    totalSummBasket['totalAmount'] = totalAmount;
    totalSummBasket['totalSumm'] = totalSumm;   
    console.log(totalSummBasket);
}

// console.log(deleteBasket(+process.argv[2]));
// deleteAllBasket();
// console.log(addBasket(+process.argv[2],process.argv[3]));
totalSummBasket();