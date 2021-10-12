const animals = ['🙈','🙉','🙊','🦍']
//const newAnimals = []

//for (let index = 0; index < animals.length; index++) {
//    const element = animals[index];
//    newAnimals.push(element + ' +')
//}

const newAnimals= animals.map(item => item + ' 🦧')

console.log('array' , animals);
console.log('map newAnimals' , newAnimals);


