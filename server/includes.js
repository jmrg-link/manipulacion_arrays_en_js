// includes
const pets = ['cat','dog','bat']

let includeInArray = false
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true
        break
    }
}
console.log('includes con for: ' , includeInArray);

const rta1 = pets.includes( 'dog')
console.log('includes: ', rta1);