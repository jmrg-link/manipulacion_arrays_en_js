const words = ['spray','limit','elite','exuberant']
const newArray = []

for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 6) {
        newArray.push(item)
    }
}

console.group('Ejemplo de FOR:')
console.log('newArray', newArray);
console.log('words'   , words      );
console.groupEnd('Ejemplo de FOR:')

const rta = words.filter(item => item.length >= 6)

console.group('Ejemplo de FILTER:')
console.log('rta'     , rta);
console.log('words'   , words      );
console.groupEnd('Ejemplo de FILTER:')

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

const rta2 = orders.filter(item => item.delivered && item.total >= 600)
console.log('rta2: ' , rta2);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query)
    })
}

console.log('Orden de Compra con nombre: ', search('Jesus'));