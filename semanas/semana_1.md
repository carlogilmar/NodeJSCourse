<img width="1244" alt="image" src="https://user-images.githubusercontent.com/17634377/161413194-a3f91d2f-a6cd-4edd-9382-8ffd65d8ed7c.png">

![Ilustración_sin_título 1](https://user-images.githubusercontent.com/17634377/163835782-5567ad50-ff7e-47da-b856-29cb32ba6f06.PNG)

# Semana 1

<details open>
<summary> 1. ⭐️ Detalles </summary>

 <img width="1156" alt="image" src="https://user-images.githubusercontent.com/17634377/159152594-9975c662-260b-4260-bedb-95862023e00e.png">

# ⭐️ Objetivo

> En esta primera semana nos adentraremos al mundo de JavaScript como lenguaje de programación, haremos un necesario recorrido por sus fortalezas y debilidades a fin de comprender cómo funciona Node JS y cómo podemos comenzarlo a usar. Así como recapitularemos algunos conceptos vistos ya para este punto en las misiones previas, tendremos una actividad de onboarding para comprender la importancia de las herramientas, y comenzaremos a familiarizarnos con JavaScript como lenguaje de programación de propósito general.

# 🏆 Aventuras por descubrir

- 🎯 La importancia de las herramientas en el desarrollo de software: Git y GitHub.
- 🎯 JavaScript como lenguaje de programación y Node JS como entorno de ejecución.
- 🎯 Scripting (módulos, contextos, ES6, CommonJS, NPM).

# 🎁 Entregables

 - 🎁 Entregables del Onboarding.
 - 🎁 Crear un repositorio en GitHub donde puedas ir guardando los scripts de pruebas.

</details>

<details>
<summary> 2. 🔥 Checkpoint </summary>

 <img width="1165" alt="image" src="https://user-images.githubusercontent.com/17634377/159152590-8f2b2032-be88-45f1-a4f7-008195022b7a.png">

 ## 📍 Onboarding

 Es muy importante resaltar el uso de herramientas en el desarrollo de software, para ello he diseñado una misión de onboarding sobre Git, GitHub, Markdown, y GoHugo; es una guía paso a paso donde **montarás un blog personal en donde podrás compartir tus experiencias de Launch X**. Es un complemento que te ayudará a ir comprendiendo diferentes aplicaciones de herramientas muy importantes que para este punto ya debes conocer. Da click en el siguiente link:

 <a href="https://github.com/LaunchX-InnovaccionVirtual/MissionNodeJS/blob/main/semanas/onboarding_0.md"><img src="https://img.shields.io/badge/🔗link-OnboardingMission-green?style=for-the-badge"></a>

 > Recuerda que esta Onboarding Mission la retomaremos en las mentorías. 📞

 ## 💾 Repo para guardar tus ejercicios

 1. Ve al siguiente repositorio: [Link a Playbook 🔗](https://github.com/visualpartnership/playbook)
 2. Da click en el botón de **fork**. Realiza el fork de este repo en tu perfil de GitHub.
 3. Descarga tu **fork** de este repo en tu computadora. Ahí guardarás todos tus ejercicios de las Weekly Missions.
 4. Puedes ir al botón verde **code** y obtener la url para clonar tu proyecto en tu computadora.

 ![test](https://user-images.githubusercontent.com/17634377/159151927-fd5136c4-7e5d-4264-b2ec-bc6e0a892d07.gif)

 ## 🎮 Instalación de tu ambiente de desarrollo

 1. Para este punto deberás tener instalado Git y una cuenta activa de GitHub.
 2. Instala el editor de texto de tu preferencia (VSCode, Sublime Text, Atom, etc.)
 3. Instala NodeJS en tu Sistema Operativo: [Node JS](https://nodejs.org/es/download/)
  - Para comprobar tu instalación de Node JS, abre tu terminal y teclea el siguiente comando:
 > node --version
  - Crea un archivo llamado hello.js y agrega lo siguiente:
 ``` js
  console.log("Hola LaunchX desde Node JS")
 ```
  - En tu terminal, ve al directorio donde acabas de crear este archivo y ejecuta el siguiente comando:
 > node hello.js

![test](https://user-images.githubusercontent.com/17634377/159154363-7a7e67ed-fa57-4a58-b130-dceac6dd0717.gif)

 Si tienes problemas con ejecutar estos comandos, posiblemente no has instalado correctamente Node, verifica la instalación según tu sistema operativo.

 ## Ejercicios

 > Una vez que lograste verificar el punto anterior, podrás comenzar a realizar los ejercicios. Los siguientes ejercicios son para que copies el contenido y los pruebes por tu cuenta. El objetivo de esto es que aprendas a leer código de javascript, para ello tendrás que leer el código y entender lo que va realizando paso a paso. En las mentorías retomaremos estos ejercicios.

 ### 🪐 Example 1: Objetos de JS

 1. Crea una carpeta llamada `example1` dentro de la carpeta `weekly_mission_1`.
 2. Copia el contenido y crea un archivo llamado `main.js` dentro de esta carpeta.
 3. Ejecuta el siguiente comando: `node main.js`
 4. Este código también puede ser probado desde la consola de de Javascript de tu navegador.

 ```javascript
// 1. Creación de un objeto con propiedades

let myCar = new Object(); // Creación de un objeto
myCar.make = 'Ford'; // Guardando un valor dentro del objeto creado
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar) // Imprimiendo objeto

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
 ```

 ### 🪐 Example 2: Exportando funciones entre scripts con CommonJS

 1. Crea una carpeta llamada `example2` dentro de la carpeta `weekly_mission_1`.
 2. Crea dos archivos: `logger.js` y `main.js`. Abajo encontrarás el contenido de ambos. Leélo e interprétalo.
 3. Ejecuta el siguiente comando: `node main.js`

`logger.js`

```javascript
// logger.js

// Esta es una función que se guardara en este módulo como info
exports.info = (message) => {
  console.log(`info: ${message}`)
}

// Esta es una función que se guardara en este módulo como verbose
exports.verbose = (message) => {
  console.log(`verbose: ${message}`)
}

/*
  const logger = require('./logger')
  logger.info('This is an informational message')
  logger.verbose('This is a verbose message')
 * */

```

`main.js`

```javascript
// node main.js

const logger = require('./logger')

logger.info('This is an informational message')
logger.verbose('This is a verbose message')

 ```

 ### 🪐 Example 3: Diferentes formas de exportar funciones

 1. Crea una carpeta llamada `example3` dentro de la carpeta `weekly_mission_1`.
 2. Abajo encontrarás los tres archivos que deberás crear dentro de esta carpeta y su contenido.
 3. Ejecuta el siguiente comando: `node main.js`

`logger_1.js`
```javascript
/*
  Esto también es la declaración de una función

  module.exports hará que puedas invocar esta función en otro script como:
  > const logger = require('./logger')

  y usarla como:

  > logger("Heeey!")
*/

module.exports = (message) => {
  console.log(`info: ${message}`)
}
```

`logger_2.js`
```javascript

/*
  Al exportar una función/objeto así:

  > module.exports.verbose

  Estaremos exportando el contenido con el nombre `verbose`

  module.exports hará que puedas invocar esta función en otro script como:
  > const logger = require('./logger')

  y usarla como:

  > logger.verbose("Heeey!")
*/

module.exports.verbose = (message) => {
  console.log(`verbose: ${message}`)
}
```

`main.js`
```javascript
/*
  node main.js
*/

const logger1 = require('./logger_1')
const logger2 = require('./logger_2')

logger1('This is an informational message')
logger2.verbose('This is a verbose message')

```

 ### 🪐 Example 4: Clases y Objetos

 1. Crea una carpeta llamada `example4` dentro de la carpeta `weekly_mission_1`.
 2. Crea los siguientes archivos con el contenido indicado.
 3. Ejecuta el siguiente comando: `node main.js`

`logger.js`
```javascript
class Logger {
  constructor(name) {
    // this es una variable para referenciar el valor del contexto local de esta clase
    this.name = name // Estás variables se le conocen como atributos
  }

  // método
  // this.name es la variable que se guarda en el contexto local
  // message es una variable que se le pasa al ejecutar este método
  info (message) {
    console.log(`[Objeto con nombre: ${this.name}] info: ${message}`)
  }

  // método
  verbose (message) {
    console.log(`[Objeto con nombre: ${this.name}] verbose: ${message}`)
  }
}

// Esta clase se exporta en este módulo
module.exports = Logger
```

`main.js`
```javascript
const Logger = require('./logger') // Invocas el módulo que contiene la clase

// Creación de un objeto
const dbLogger = new Logger('DB') // Creas un objeto nuevo, esto llama por default el constructor de la clase
// invocación del método
dbLogger.info('This is an informational message')

// Creación de otro objeto
const accessLogger = new Logger('ACCESS')
accessLogger.verbose('This is a verbose message')
```

 ### 🪐 Example 5: Clases y Objetos

 1. Crea una carpeta llamada `example5` dentro de la carpeta `weekly_mission_1`.
 2. Crea los siguientes archivos con el contenido indicado.
 3. Ejecuta el siguiente comando: `node main.js`

`logger.js`
```javascript
class Logger {
  constructor(name){
    // Al crear este objeto se guardarán estos valores
    this.count = 0
    this.name = name
  }

  log(message) {
    this.count++ // se aumenta el contador interno al llamar este método
    console.log('[' + this.name + '] ' + message)
  }
}

module.exports = new Logger('DEFAULT') // Instanciación del objeto y se exporta
```

`main.js`
```javascript
const logger = require('./logger')

// Ya se puede usar directamente el objeto instanciado en el módulo logger
logger.log('This is an informational message')

/*
También pueder instanciar uno nuevo de esta manera:
  const customLogger = new logger.constructor('CUSTOM')
  customLogger.log('This is an informational message')
*/
```

### 🪐 Example 6: Modificación de clases

 1. Crea una carpeta llamada `example6` dentro de la carpeta `weekly_mission_1`.
 2. Crea los siguientes archivos con el contenido indicado.
 3. Ejecuta el siguiente comando: `node main.js`

`logger.js`
```javascript
class Logger {
  constructor (name) {
    this.count = 0
    this.name = name
  }

  log (message) {
    this.count++
    console.log('[' + this.name + '] ' + message)
  }
}

module.exports = new Logger('DEFAULT') // Nuevo objeto instanciado
module.exports.Logger = Logger // Clase
```

`patcher.js`
```javascript
/*
 * Ten en cuenta:
 *    - require('./logger') te dará el objeto creado
 *    - require('./logger').Logger te regresará la clase
 *
 * En este caso estamos agregando una función más al objeto instanciado, no a la clase.
 * */
require('./logger').customMessage = function () {
    console.log('This is a new functionality')
}
```

`main.js`
```javascript
require('./patcher') // Llamas este módulo que modifica el objeto instanciado
const logger = require('./logger') // Al llamar el módulo en logger.js te dará el objeto modificado

logger.customMessage()
```

 ### 🪐 Example 7: EcmaScript Modules ESM

 1. Crea una carpeta llamada `example7` dentro de la carpeta `weekly_mission_1`.
 2. Crea los siguientes archivos con el contenido indicado.
 3. Ejecuta el siguiente comando: `node main.js`
 4. Ejecuta el siguiente comando: `node main_2.js`

`package.json`
```javascript
{
  "name": "esm-syntax",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```

`logger.js`
```javascript
/*
  Este modulo se comporta como si fuera un objeto que contiene todo lo definido

  [Module: null prototype] {
    DEFAULT_LEVEL: 'info',
    LEVELS: { error: 0, debug: 1, warn: 2, data: 3, info: 4, verbose: 5 },
    Logger: [class Logger],
    log: [Function: log]
  }

*/

// exports a function
export function log (message) {
  console.log(message)
}

// exports a constant
export const DEFAULT_LEVEL = 'info'

// exports an object
export const LEVELS = {
  error: 0,
  debug: 1,
  warn: 2,
  data: 3,
  info: 4,
  verbose: 5
}

// exports a class
export class Logger {
  constructor (name) {
    this.name = name
  }

  log (message) {
    console.log(`[${this.name}] ${message}`)
  }
}

```

`main_module.js`
```javascript
/* Importando el módulo */
import * as loggerModule from './logger.js'

console.log(loggerModule)
```

`main.js`
```javascript
import * as loggerModule from './logger.js'

console.log(loggerModule)
```

`main_2.js`
```javascript
import { log } from './logger.js'

log('Hello world')
```

 ### 🪐 Example 8: EcmaScript Export Default

 1. Crea una carpeta llamada `example8` dentro de la carpeta `weekly_mission_1`.
 2. Crea los siguientes archivos con el contenido indicado.
 3. Ejecuta el siguiente comando: `node main.js`
 4. Ejecuta el siguiente comando: `node main_2.js`

`package.json`
```javascript
{
  "name": "esm-syntax",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

`logger.js`
```javascript
/*
  export default nos permite exportar esta clase e importara

  import MyLogger from './logger.js'
*/

export default class Logger {
  constructor (name) {
    this.name = name
  }

  log (message) {
    console.log(`[${this.name}] ${message}`)
  }
}
```

`main.js`
```javascript
// Importando la clase MyLogger
import MyLogger from './logger.js'

const logger = new MyLogger('info')
logger.log('Hello World')
```

`main_2.js`
```javascript
/* Importando el módulo */
import * as loggerModule from './logger.js'

console.log(loggerModule)
```

 ### 🪐 Example 9: Ejercicio

1. Crea el archivo `main.js` con el siguiente contenido:

`main.js`
```javascript
const Pokemon = require('./pokemon')

const pikachu = new Pokemon("pikachu")
const bulbasaur = new Pokemon("bulbasaur")
const squirtle = new Pokemon("squirtle")
const charmander = new Pokemon("charmander")

pikachu.sayHello()
pikachu.sayMessage("Heey!")

bulbasaur.sayHello()
bulbasaur.sayMessage("Heey!")

charmander.sayHello()
charmander.sayMessage("Heey!")

squirtle.sayHello()
squirtle.sayMessage("Heey!")
```

```
$ node main.js

Mi pokemon pikachu te saluda!!!
Mi pokemon pikachu dice: Heey!
Mi pokemon bulbasaur te saluda!!!
Mi pokemon bulbasaur dice: Heey!
Mi pokemon charmander te saluda!!!
Mi pokemon charmander dice: Heey!
Mi pokemon squirtle te saluda!!!
Mi pokemon squirtle dice: Heey!
```

2. Crea el archivo `pokemon.js`.
3, Crea una clase `Pokemon`, exportala usando CommonJS, de tal forma que pueda usarse como se indica previamente.
  - Crea la clase.
  - Crea un `constructor` que permita recibir un nombre.
  - Crea la función `sayHello()`.
  - Crea la función `sayMessage()`.
  - Exporta la clase para que pueda ser importada en el archivo `main.js`.

> Este ejercicio deberá resultarte familiar si realizaste los ejercicios anteriores.

### 🪐 Example 10: Ejercicio

 1. Crea una carpeta llamada `example9` dentro de la carpeta `weekly_mission_1`.
 2. Crea un archivo `main.js` y `package.json` con el siguiente contenido:

`main.js`
```javascript
import MyPokemon from './pokemon.js'

const pikachu = new MyPokemon('Pikachu')
pikachu.sayHello()
```

`package.json`
```javascript
{
  "name": "esm-syntax",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

3. Crea un archivo `pokemon.js`, ahí crea la clase que necesitas para correr el archivo `main.js`. Deberás exportarla usando ESM.
  - Necesitarás usar `export default`.
  - La clase tiene la misma implementación que el ejercicio anterior.
  - Finalmente corre: `node main.js`


### Al final la weekly mission deberá contener estos 10 ejercicios ✅.

</details>

<details>
<summary> 3. 📕 Referencias </summary>

 <img width="1161" alt="image" src="https://user-images.githubusercontent.com/17634377/159152584-a2bb5a6b-ff26-49f3-962f-ca285ea1e91a.png">

 Puedes revisar lo siguiente para profundizar en el conocimiento de Javascript:
 1. [JS Mozilla](https://developer.mozilla.org/es/docs/Learn/JavaScript)
 2. [Eloquent JS](https://eloquentjavascript.net/)
 3. [Rediscovering JS](https://pragprog.com/titles/ves6/rediscovering-javascript/)
</details>
