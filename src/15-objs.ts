(() => {
    type Sizes = 'S' |'M' |'L' |'XL';
    type Product = {
        title:string,
        createdAt: Date,
        stock: number,
        size?: Sizes
    }

    const products: Product[] = [];

    const addProduct = (data: Product) => {
        products.push(data);
    } 

    addProduct({
        title: 'Prod1',
        createdAt: new Date(1993,1,1),
        stock: 12
    });

    addProduct({
        title: 'Prod2',
        createdAt: new Date(1993,1,1),
        stock: 13,
        size: 'S'
    });
    
    products.push({
        title: 'Prod3',
        createdAt: new Date(1998,1,1),
        stock: 15,
        size: 'XL'
    });
    console.log(products);
})();