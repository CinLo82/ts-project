(() => {
    let productPrice = 100;
    productPrice = 12;
    console.log(productPrice, 'ProductPrice');

    let customerAge = 28;
    customerAge = customerAge + 1;
    console.log(customerAge, 'customerAge');

    let productInStock: number;
    console.log(productInStock);
    if(productInStock > 10)
        console.log('Is greater');

    let discount = parseInt('sdfds');
    console.log(discount, 'discount');
    if (discount <= 200) {
        console.log('apply');
    } else {
        console.log('not apply');
    }

    let hex = 0xfff;
    console.log('hex', hex);

    let bin = 0b1010010;
    console.log(bin, 'bin');

    let myNumber = 30;
    myNumber = myNumber + '50';
    console.log(myNumber, 'mynumber');
})();