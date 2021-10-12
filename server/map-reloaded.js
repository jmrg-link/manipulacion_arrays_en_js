const orders = [
    {
        customerName: 'Jesus',
        total: 60,
        delivered: true
    },
    {
        customerName: 'Juan',
        total: 90,
        delivered: false
    },
    {
        customerName: 'Santiago',
        total: 161,
        delivered: true
    },
    {
        customerName: 'Antonia',
        total: 690,
        delivered: true
    }
]
const rta = orders.map(item => item.total)

console.group('ARRAY-RTA')
console.log('original', orders);
console.log('rta:numbers', rta);
console.groupEnd('ARRAY-RTA')

//const rta2 = orders.map(item => {
//    item.tax = .21
//    return item
//})
//console.group('ARRAY-RTA2')
//console.log('original',  orders );
//console.log('rta2', rta2);
//console.groupEnd('ARRAY-RTA2')

const rta3 = orders.map((item) => {
    return {
        ...item,
        tax: .21
    }
})
console.group('ARRAY-RTA3')
console.log('original',  orders );
console.log('rta3', rta3);
console.groupEnd('ARRAY-RTA3')