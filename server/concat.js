// concat

const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];

const newArray = [...elements]
for (let index = 0; index < otherElements.length; index++) {
    const element = otherElements[index];
    newArray.push(element)
}
console.log('for:', newArray);

const rta = elements.concat(otherElements)
const rta2 = [...elements,...otherElements]
const rta3 = [...elements,'random']
console.log('concat:', rta);
console.log('spread op:', rta2);
console.log('spread op + string: ', rta3);
elements.push(...otherElements)// agregar nuevos elementos del array dentro de otro array con spread operation
console.log('merge elements :',elements);