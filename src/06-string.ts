(() => {
    let productTitle = 'My amazing product';
   // productTitle = 323;
   // productTitle = () => {};
   // productTitle = null;

    productTitle = 'My amazing product changed';
    console.log('productTitle', productTitle);

    const productDescription = "bla bla bla bla";
    console.log('productDescription', productDescription);

    let productPrice = 100;
    let isNew: boolean = false;

    const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
    `;
    console.log(summary);
})();