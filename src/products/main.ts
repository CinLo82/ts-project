import { products, addProduct, calcStock } from "./product.service";

addProduct({
    title: 'Prod1',
    createdAt: new Date(1993,1,1),
    stock: 12
});

addProduct({
    title: 'Prod2',
    createdAt: new Date(1993,1,1),
    stock: 13,
    size: 'XL'
});
console.log(products);
const total = calcStock();
console.log(`El total de productos es ${total}`);