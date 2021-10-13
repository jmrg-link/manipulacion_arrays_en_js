//Reto:1
const products = [
    {title: "Pizza", price: 121, id: "🍕"},  
    { name: "Burger", price: 121, id: '🍔' },
    { name: "Hot cakes", price: 121, id: '🥞' },
];
const myProducts = []
console.group('Reto-1')
console.log("Products:",products);
console.log("MyProducts:", myProducts);
console.log("-".repeat(10));
console.groupEnd('Reto-1')

const productIndex = products.findIndex(item => item.id === '🍔')
if(productIndex !== -1){
    myProducts.push(products[productIndex])
    products.splice(2,1)
}

console.group('Reto-1.1')
console.log("Products:",products);
console.log("MyProducts:", myProducts);
console.log("-".repeat(10));
console.groupEnd('Reto-1.1')

//Reto:2
const productsV2 = [
    {title: "Pizza", price: 121, id: "🍕"},  
    { name: "Burger", price: 121, id: '🍔' },
    { name: "Hot cakes", price: 121, id: '🥞' },
];

const update = {
    id:'🥞',
    changes: {
        price: 200,
        description: 'delicioso'
    }
}

const productIndexV2 = productsV2.findIndex(item => item.id === update.id)
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2],
    ...update.changes
}

console.log('productsV2', productsV2);