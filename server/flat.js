//flat

const matriz = [
    [1,2,3],//0
    [4,5,6,[1,2,[1,2,3]]],//1
    [7,8,9]//2
]
const newArray = []
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element)
    }
}
const rta = matriz.flat(3)
console.log('for array de matriz: ' , newArray);
console.log('flat: ' , rta);
