(() => {
    let prices = [1,2,3,4,5,6, true, 'hola'];
    prices.push('adaas');
    prices.push('true');
   // prices.push(()=>{}));
    prices.push(523452);

    let product = ['hola', true];
    product.push(false);

    let mixed: (number | boolean | string | object)[] = ['hola', true];
    mixed.push(false);
    mixed.push(2313);
    mixed.push({});
    mixed.push([]);

    let numbers = [1,2,3,4,53,2];
    numbers.map(item => item * 2);
})();