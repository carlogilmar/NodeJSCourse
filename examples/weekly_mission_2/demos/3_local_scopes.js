/*
	Contexto local: definir variables dentro de funciones, fuera de ahí no estarán disponibles.
*/
function my_function_to_keep_local_values() {
  const my_age = 27
  console.log(my_age)
}

// console.log(my_age), Uncaught ReferenceError: gravity is not defined

if (true){
  const my_age = 27
  console.log(my_age) // 9.81
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

for(let index = 0; index < 3; index++){
  console.log(index)
}
// console.log(index), Uncaught ReferenceError: i is not defined
