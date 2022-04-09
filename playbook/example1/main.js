/*
	# Objetos en Javascript

  > JavaScript está diseñado en un paradigma simple basado en objetos. Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. El valor de una propiedad puede ser una función, en cuyo caso la propiedad es conocida como un método. Además de los objetos que están predefinidos en el navegador, puedes definir tus propios objetos. Este capítulo describe cómo usar objetos, propiedades, funciones y métodos; y cómo crear tus propios objectos.

	¿Comó probar esto?

	> node main.js

	Con este ejemplo comprenderás:
		- Cómo crear un objeto
		- Crear variables locales dentro del objeto
		- Exponer variables locales como públicas
*/

// 1. Creación de un objeto con propiedades

let myCar = new Object(); // Creación de un objeto
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar)

// 2. Declaración de un objeto con variables locales y públicas

const myModule = (() => {

	// Variables de contexto local
  const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto"
  const privateBar = [1,2,3,4]
  const baz = "Soy un valor que va a ser expuesto"

	// Variable para guardar las variables locales
  const exported = {
    publicFoo: "Valor público, pueden verme desde donde me llamen",
    publicBar: "Otro valor público",
		publicBaz: baz
  }

	// Exposición de variables locales
  return exported
})()

console.log(myModule)

