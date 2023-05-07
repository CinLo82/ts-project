(() => {
    const login = (data: {email: string, password: number}) => {
        console.log(data.email, data.password);
    }

    login({
        email: 'cinlo@cinlo.co', 
        password: 12313213
    });


    type Sizes = 'S' |'M' |'L' |'XL';

    const products: any[] = [];

    const addProduct = (data: {
        title:string,
        createdAt: Date,
        stock: number,
        size?: Sizes
    }) => {
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
    console.log(products);
})();