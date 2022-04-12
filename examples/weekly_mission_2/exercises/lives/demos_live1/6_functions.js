/**/

// 1. CALLBACKS

// Esto es una función que suma 100 a un número
const sum_one_hundred = function(n){
	return n + 100
}

// Esto imprime la definición de la función pero no la ejecuta
console.log(sum_one_hundred)

// Esto ejecuta la función
console.log(sum_one_hundred(5)) // 105

// Esta es otra función que recibe 2 parámetros: callback y n
// Podemos debuggear y entender cuál es el orden en que se ejecutan
const multiplier_function = function(function_to_apply, number) {
  return function_to_apply(number) * number
}

console.log(multiplier_function(sum_one_hundred, 5)) // (5 + 100) * 5 = 525

// DEFINICIONES DE FUNCIONES con Fat Arrow
//const sum_one_hundred = (n) => {
//	return n + 100
//}
//
//const multiplier_function = (function_to_apply, number) => {
//  return function_to_apply(number) * number
//}


// 2. RETURNING FUNCTIONS
const numbers = [1, 2, 3, 4]

const sumArray = (arr) => { // Función que toma una lista
  let total = 0 // Declaro una variable sum = 0

  const sumElementToTotal= (element) => { // función dentro de una función
    total += element // toma la variable sum y suma el valor del argumento element
  } // esta es una definición de función

  arr.forEach(sumElementToTotal) // una lista tiene por defecto ciertos métodos, uno de ellos es forEach
  // forEach aplica una función a cada elemento de la lista
  //
  return total
}

console.log(sumArray(numbers))

// 3. DECLARAR FUNCIONES
const numbers_list = [1, 2, 3, 4]
const sumArray2 = (numbers_list) => {
  let total = 0
  numbers_list.forEach(function(element) { // declaramos explícitamente la función aquí
    total += element
  })
  return total
}

console.log(sumArray2(numbers))
