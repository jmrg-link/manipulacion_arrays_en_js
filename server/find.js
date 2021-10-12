const numbers = [1,30,49,29,10,13]

let rta = null

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 30) {
       rta = element 
       break
    }
}

console.log('for : ', rta);