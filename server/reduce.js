//example reduce

const totals = [1,2,3,4,5,6]

let sum = null

//for
//for (let index = 0; index < totals.length; index++) {
//    const element = totals[index];
//    sum = sum + element
//}
//console.log('for : sumado ' , sum);
let inicializate = 0
const rta = totals.reduce((sum,element)=> sum + element , inicializate)
console.log('rta: sumado ', rta);