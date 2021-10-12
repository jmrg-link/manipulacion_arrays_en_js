<div align="center">
  <h1>Curso de Manipulacion de Arrays en Javascript</h1>
  <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Platzi.jpg" alt="platzi logo" height="300px">
  <h3 style="font-weight:bold;" >Curso de Manipulacion de Arrays en Javascript (2H)</h3>
  <h5></h5>
</div>

## Requisitos :clipboard:

*   Clousures y Scope
*   Javascript Profesional
*   Javascript Basico
*   Curso de ES6
*   Curso de prework en; OSX (Mac), Windows o Linux.

## Comenzando 🚀

## Descripcion :notebook:

**Metodos de Arrays en Javascript**
<p>Este curso tiene por objetivo explicar en profundidad como funcionan los distintos metodos para tratar los arrays </p>

## Listado de Temas del Curso: 💯
    *   Curso de Manipulacion de Arrays en Javascript
---
#### Generando Repositorio en Github

- Repositorio de libre acceso con documentacion y ejemplos propios y del curso .
- En este apartado puedes tener explicaciones y referencias a la documentacion oficial de [Javascript.info](https://es.javascript.info) || [Mozilla MDN Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---
#### ForEach
-   El método `Array.prototype.forEach` nos permite iterar sobre cada elemento de un array y ejecutar un `callback` que le pasamos como argumento.

```javascript
// Syntax
ArrayName.forEach((item, index, array) => { /*code*/ })

```
-   El `callback` que le pasamos a este método puede tomar 3 parámetros: 

1. **item** → el elemento actual.
2. **index [opcional]** → el índice del elemento actual.
3. **array [opcional]** → el array mismo sobre el que estamos iterando.

```javascript

[1,2,3].forEach(console.log)

//expected output
//item - index -  array
    1  -   0   -  [1,2,3]
    2  -   1   -  [1,2,3]
    3  -   2   -  [1,2,3]

```
---
#### Mutable o Inmutable
-   Un **`valor mutable es todo aquel que puede cambiar después de haber sido creado`**, y uno **`inmutable siempre será igual a través del tiempo`**, no es posible cambiar su valor sin perder el valor anterior o sin causar un error. 

    - :speech_balloon: En **JavaScript** solo los **`arrays`** y los **`objetos`** son mutables. Cuando intentamos cambiar o 'mutar' una variable que contiene un string o un número, esta no va a 'mutar' su valor original, sino que se creará un nuevo espacio en memoria con el nuevo valor y la variable ahora apuntará a este nuevo espacio, soltando el valor anterior y dejándolo a disposición del **`garbage collector`**.
  
-   Algunos de los métodos que se encuentran dentro de Array.prototype son mutables ya que alteran el array original, y otros por su parte crean copias del array original para así evitar modificarlo.

- > -**`Paso por referencia vs Paso por valor`**
  - Por tipos, los primitivos se pasan por valor y los objetos por referencia
    
    <img src="https://static.platzi.com/media/user_upload/1_t6HbQiO7mmPvaesR9nAriw-6c33bd61-5064-475e-976a-fc998fdf56e2.jpg" alt="ejemplo-for" height="300px">

    <img src="https://i.stack.imgur.com/8XAQ1.gif" alt="fullcups" height="300px">



##### :star: Métodos vs for/for... of...
- Estas dos formas de resolver problemas relacionados con arrays corresponden a diferentes paradigmas de programación; los métodos son la forma declarativa de decirle al programa qué debe hacer, y los `for/for... of...` son la forma imperativa de decirle al programa qué hacer y cómo debe hacerlo paso a paso.

- Según algunos tests y pruebas se ha demostrado que suele ser mucho más rápido para un programa ejecutar el código imperativo, pero siempre será mucho más fácil de leer el código declarativo, así que es una cuestión de performance y gustos del programador.

  - [Aquí](https://leanylabs.com/blog/js-forEach-map-reduce-vs-for-for_of/) puedes encontrar mucha más información sobre esto.

---
#### Map
-   **Map** es un método inmutable que nos permite iterar sobre un array y crear uno nuevo con nuevas características o transformaciones.

```javascript
//Syntax  
ArrayName.map((item, index /*optional*/, array /*optional*/) => { /*code*/ })

```

- El callback que le pasamos a este método puede tomar 3 parámetros:
    - **item** → el elemento actual.
    - **index [opcional]** → el índice del elemento actual.
    - **array [opcional]** → el array mismo sobre el que estamos iterando. 

```javascript
//ejemplo  
/* ArrayName.map((item, index, array) => { //code }) */
const numbers = [1, 2, 3, 4, 5];
const numbersPlusOne = numbers.map(number => number + 1);

console.log('original', numbers) /*[1, 2, 3, 4, 5]  El array original no fue modificado */
console.log('new_version', numbersPlusOne) /* [2, 3, 4, 5, 6] Sino que se creo una nueva copia con las modificaciones. */
```
 
---
#### Map Reloaded
- Usos comunes o clásicos de map() sobre los arrays:
    - Limpiar datos, seleccionar datos dentro de un array y devolverlos para su utilización en futuras acciones.
    - Añadir un nuevo elemento, modificar agregando un nuevo dato al objeto pero sin modificar el array original.
  
- Hay que tener en cuenta que cuando trabajamos con objetos y con la funcion Array.prototype.map() o map() y retornamos el mismo objeto, lo que realmente hacemos es copiar la referencia en memoria (heap) que tiene el objeto original. 
  
- Esto provoca que como estamos modificando la referencia en memoria(heap), el array original también sea modificado. 
- **Conclusion:**  map() es inmutable, copia la referencia en memoria y por eso hace el cambio en el array original.
  
```javascript
// Estamos retornando el objeto
// copia la refencia en memoria
const rta = orders.map(item => {
    item.tax = .21
    return item;
})
```
- Para realizar una copia y evitar la referencia en memoria, utilizamos el [spread operator](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax) de ES6, donde generamos un nuevo objeto con los valores del objeto original y luego agregamos el nuevo valor que nos interesa.

```javascript
const rta = orders.map(item => {
    //retornamos un nuevo objeto 
    //pero evitamos hacer ref. en memoria
    return {
        ...item,
        tax: .21,
    }
})
```
---
#### Filter
- Filter es un método inmutable que nos permite iterar sobre un array y crear un nuevo array solo con los elementos que cumplan cierta condición.
  
```javascript
//Syntax
arrayName.filter((item, index /*optional*/, array /*optional*/) => /*codition*/);
```
- El callback que le pasamos a este método puede tomar 3 parámetros: 
  - 1. **item** → el elemento actual.
  - 2. **index [opcional]** → el índice del elemento actual.
  - 3. **array [opcional]** → el array mismo sobre el que estamos iterando.

```javascript
const animals = ['🐱', '🐶', '🦁', '🐍', '🐞'];
const dog = animals.filter(animal => animal === '🐶');
console.log('dog:', dog) //expected output: 'dog: ['🐶']'

```

---
#### Reduce
- El método reduce nos permite tomar todos los valores de un array y reducirlos a uno solo, por lo tanto este método no retorna un array, sino un único valor. No modifica el array original, es inmutable.
- 
```javascript
//Syntax

```
---
#### Reduce Reloaded
-   Ejemplo
```javascript

arrayName.reduce(
	(accumulator, item, index /*optional*/, array /*optional*/) => { /*code*/ },
	accumulatorInitialValue
)

```
- Este método recibe dos argumentos:
  - 1. **Callback →** Esta función se encargará de 'reducir' el array y retornar el valor que queremos que se vaya guardando dentro del `acumulator`. Puede tomar 4 argumentos:
        - accumulator → esta variable es la que se encargará de ir guardando el valor que retorna el `callback` en cada iteración.
        - item →cada uno de los valores del array.
        - index [opcional] → el índice del item actual.
        - array [opcional] → el array sobre el que estamos aplicando el método.
  - 2. **accumulatorInitialValue** →es el valor que tomará `accumulator` en la primera iteración.

  <img src="https://miro.medium.com/max/2000/1*dhTC_FFgiH3mKROrnDj12w.gif" alt="fullcups" height="300px">

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(
	(accumulator, number) => {
		console.log(`accumulator: ${accumulator}, number: ${number}, return_value: ${accumulator + number}`);
		return accumulator + number;
	},
	5
);

console.log(sum) // 20

/* expected output: */
// primera vuelta -> accumulator: 5, number: 1, return_value: 6
// segunda vuelta -> accumulator: 6, number: 2, return_value: 8
// tercera vuelta -> accumulator: 8, number: 3, return_value: 11
// cuarta vuelta -> accumulator: 11, number: 4, return_value: 15
// quinta vuelta -> accumulator: 15, number: 5, return_value: 20
// final result -> 20

```

---
#### Reduce Reloaded
-   Devolver un solo objeto, aunque contenga “muchos elementos” sigue siendo un solo elemento de tipo objeto, y es por eso que se dice que reduce() solo devuelve un único valor.
-   Ejemplo
```javascript
const numbers = [1,2,3,3,4,5,2,1,1,3,4,5,6,7,5,5,4,7,8,9,8,7,5,4,5,8,9];
const ranges = ['1-5','6-7','8-9'];

const result = numbers.reduce((acum, item) => {
  if (item < 5) {
    !acum[ranges[0]] ? acum[ranges[0]] = 1 : acum[ranges[0]] += 1;
  } else if (item > 5 && item < 8) {
    !acum[ranges[1]] ? acum[ranges[1]] = 1 : acum[ranges[1]] += 1;
  } else {
    !acum[ranges[2]] ? acum[ranges[2]] = 1 : acum[ranges[2]] += 1;
  }
  return acum
},{})

console.log(result) // { '1-5': 12, '8-9': 11, '6-7': 4 }
```
---

#### Some
-   Some retorna true si alguno de los elementos dentro de un array cumple una condición dada, o false si es que no se cumple, es inmutable.
-  ⚡  Este método retornará false si el array que iteramos está vacío.
-  Libreria de fechas en el ejercicio: [date-fns](https://date-fns.org/)
```javascript
// Syntax
arrayName.some((item, index /*optional*/, array /*optional*/) => {/*code*/});
```
- El callback que le pasamos a este método puede tomar 3 parámetros: 
  - 1. **item** → el elemento actual.
  - 2. **index [opcional]** → el índice del elemento actual.
  - 3. **array [opcional]** → el array mismo sobre el que estamos iterando.

```javascript

const food = ['🍗', '🍖', '🥕', '🥩'];
const hasCarrots = food.some(item => item === '🥕')
console.log(hasCarrots) // expected output -> true

```
---
#### Every
-   Ejemplo
```javascript

```
---
#### Find & FindIndex
-   Ejemplo
```javascript

```
---
#### Includes
-   Ejemplo
```javascript

```
---
#### Flat
-   Ejemplo
```javascript

```
#### FlatMap
-   Ejemplo
```javascript

```
---
#### Mutable Fucntion
-   Ejemplo
```javascript

```
---
#### Sort
-   Ejemplo
```javascript

```
---
#### Tipos de Ejempos
-   Ejemplo
```javascript

```
---