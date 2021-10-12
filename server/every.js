//every

const numbers = [1,30,39,29,10,13]
let rta = true
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
        rta = false
    }
}
console.log('rta con for: ', rta);

const rta2 = numbers.every(item => item <= 40)
console.log('every rta2: ', rta2);

// se evalua que ningun numero del array sea mayor a 40 si da true significa que no hay ningun numero >= mayor o igual a 40

const team = [
    {
        name:"Nicolas",
        age:12
    },
    {
        name:"Andrea",
        age: 8,
    },
    {
        name:"Zulema",
        age:2,
    },
    {
        name:"Santiago",
        age:18
    }
]

const reto = team.every(item => item.age <= 15)
if (reto) {
    console.log('::RETO:: - Perfecto la edad maxima del equipo son 15 años');
} else {
    console.log('::RETO:: - Edad maxima del equipo incorrecta , tiene que ser menor a 15 años');
}
