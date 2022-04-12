/*
 Los objetos pueden guardar funciones, estos se llaman métodos
*/

const explorer = {
  firstName: 'Carlo',
  lastName: 'Gilmar',
  age: 27,
  country: 'Mexico',
  city: 'CDMX',
  // los objetos pueden contener objetos anidados
  address: {
   zip_code: "03022",
   address: "Dr. Vertiz 10"
  },
  skills: [
    'JS',
    'Typescript',
    'Coffeescript'
  ],
  // getFullName es el nombre del método
  getFullName: function() { // esta es la definición de una función
    // this.firstName hace referencia al valor firstName de este mismo objeto
    return `${this.firstName} ${this.lastName}`
  }
}

// Invocar el método de un objeto
console.log(explorer.getFullName())

// Modificar propiedades del objeto
explorer.country = 'México Mágico'
explorer.skills.push('Elm') // .push() agrega un elemento a una lista

// Agregar propiedades nuevas a un objeto
explorer.nationality = 'Mexican'
explorer.title = 'Mission Commander'

console.log(explorer)

// Agregando un nuevo método
explorer.getPersonInfo = function() {
  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.`
  return statement
}

console.log(explorer.getPersonInfo())

// Podemos tener listas de objetos
// Puedes explorar todos estos ejemplos en la consola de tu navegador y verlos de una forma interactiva

const explorersInNode = [
  {
    id: 1,
    name: "Explorer Name",
    username: "explorer1",
    stack: [
      "python",
      "html",
      "css",
      "js",
      "node"
    ]
  },
  {
    id: 2,
    name: "Explorer Name",
    username: "explorer2",
    stack: [
      "python",
      "html",
      "css",
      "js",
      "node"
    ]
  },
  {
    id: 3,
    name: "Explorer Name",
    username: "explorer3",
    stack: [
      "python",
      "html",
      "css",
      "js",
      "node"
    ]
  }
]


