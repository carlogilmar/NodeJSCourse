/*
 - ESM (EcmaScript modules) necesita que los scripts tengan extensión mjs
 - Puedes indicar el uso de ESM creando un package.json e indicando que son módulos, de esta forma todos los scripts pueden seguir siendo .js
    > npm init
*/
import * as loggerModule from './logger.js'

console.log(loggerModule)

