// join
let rtaFinal= ''
const elements = ['Fire', 'Air', 'Water'];
const separator = '--'
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator   
}
const rta = elements.join('--')
console.group('respuesta')
console.log('for: ', rtaFinal);
console.log('for: ', rta);
console.groupEnd('respuesta')

const title = 'Curso de Manipilacion de Arrays'
const urlFinal= title.split(' ').join('-').toLowerCase().trim()
console.log('conversion de string a url:',urlFinal);