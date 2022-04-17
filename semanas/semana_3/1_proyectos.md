# ⭐️ 1. Creación de Proyectos en JS

A continuación te muestro cómo crear paso a paso un nuevo proyecto con JS, agregando una clase y una prueba de unidad.

Considera que todo proyecto nuevo necesita de:
1. Conjunto de folders y archivos para organizar nuestro código
2. Versionamiento con git.
3. Puede incluir dependencias.
4. Todo proyecto lleva PRUEBAS DE UNIDAD. (No negociable)

Veamos a continuación como crear un proyecto de js con todas estas características:

# I Crear nuevo proyecto de JS

> Crear proyectos desde cero es indispensable para saber por dónde comenzar nuestras propias apps. 

1. Crea un directorio vacío llamado `my_launchx_app`.
2. Dentro de este directorio vacío ejecuta el comando `npm init`. Este ejecutara un cliente que te preguntará algunos datos de tu proyecto. Es indiferente esta información de momento, puedes darle `enter` hasta que termine. Al finalizar te creará el archivo `package.json`. A partir de ahora nuestro directorio es un proyecto de JS. (Así se crea desde cero.) **Recuerda siempre VERSIONAR tus apps.**

# II Agregar dependencias

> Una vez que se creó un proyecto de js, podemos proceder a agregar dependencias, es decir, bibliotecas de js que nos ayudarán a hacer ciertas acciones.

1. Vamos a agregar pruebas de unidad a nuestro proyecto recién creado. Para ello es necesario rectificar que tenemos ya el archivo `package.json`.
2. Para agregar una dependencia, se necesita indicar directamente en el `package.json`, este archivo es el corazón de cualquier app de js. Podemos hacer uso de un comando de npm para agregar la última versión de cualquier dependencia: `npm install --save-dev jest`. (Esto indica que se agrega la dependencia `jest`, y que se agrega para el ambiente de desarrollo `--save-dev`). 
3. Verifica que después del punto anterior, se haya creado un directorio `node_modules`, este contiene todos los scripts de js de las dependencias. IMPORTANTE NUNCA VERSIONAR ESTO. Para no versionar esta carpeta, crea en la RAÍZ de tu proyecto un archivo llamado `.gitignore` y agrega la siguiente línea: `**/node_modules
`, con esto vamos a decirle a git que excluya este directorio.

> Realizamos este procedimiento para agregar una nueva dependencia a nuestro proyecto. En este ejemplo agregamos JEST, un framework de testing que nos ayudará a crear nuestras pruebas de unidad. Revisa la documentación de Jest: https://jestjs.io/


# III Creación de una clase y modularización 

> Diseña una clase y realiza una prueba de unidad de la creación de un objeto de esta clase.

4. Crea dos directorios llamados `app` y `test`. 
5. En el directorio `app` crea un archivo llamado `missionCommander`. Crea una clase llamada `MissionCommander`, junto a un constructor que reciba un parámetro y lo agregue en el atributo `name`. No olvides exportar esta clase:

```js
class MissionCommander {
  constructor (name) {
    this.name = name
  }
}

// Esta línea nos permite exportar nuestra clase
module.exports = MissionCommander
```

6. Crea un archivo en la raíz de tu proyecto que se llame `index.js`. Este será el archivo principal de este proyecto.

7. En el archivo `index.js` importa tu clase, instancia al menos tres objetos e imprime los atributos `name` de todos.

`index.js`
```js
const MissionCommander = require('./app/missionCommander');
const carlo = new MissionCommander("Carlo")
console.log(carlo.name)
```

8. Ve al archivo `package.json`, debajo de la línea de `"scripts":{` agrega la siguiente línea:

```js
"start": "node index.js"
```

Con esto vamos a habilitar el comando `npm start` para que al llamarlo ejecute `node index.js`. 

9. Ahora en tu línea de comando ejecuta `npm start` y verifica que imprima lo que necesitas.

# IV. Agregar una prueba de unidad de tu clase

10. En la carpeta de `test` agrega un archivo llamado `missionCommander.test.js`.
11. En este archivo agrega lo siguiente (esta es una prueba básica de Jest):

```
describe("Esto es una suite de pruebas", () => {
  test('Caso de prueba 1', () => {
    const result = 1 + 2 
    expect(result).toBe(10);
  });
})

```

12. Ve a tu archivo `package.json`, y modifica la línea que inicia con `"test"` por:

```
"test": "node ./node_modules/.bin/jest"
```

Con esto indicamos que al realizar el comando `npm test` en realidad estaremos ejecutando con node el script `./node_modules/.bin/jest`. CUIDADO: Esto puede variar según el Sistema Operativo. 

13. Corre la prueba que acabas de crear:

```
npm test  test/missionCommander.test.js
```

Verifica que esta prueba este tronando ya que lo que indicamos en el ejemplo es un caso que debe fallar. Modifica este archivo sustituyendo `10` por `3` y vuelve a correr tu prueba, verifica que ahora no haya fallos. Con esto estamos comenzando a explorar cómo realizar una prueba de unidad. ES IMPORTANTE REVISAR LA DOCUMENTACIÓN DE JEST.

14. En tu prueba de unidad `test/missionCommander.test.js`, al inicio en la línea #1 importa tu clase:

```
const MissionCommander = require('./../app/missionCommander');
```

Vamos a agregar una prueba de unidad para probar esta clase.

15. Modifica las descripciones de la prueba:

```
describe("Unit Tests for Mission Commander Class", () => {
  test('1) Create a mission commander objet', () => {
```

16. Ahora instancia un objeto de la clase importada:

```
const myMissionCommander = new MissionCommander("Woopa")
```

17. En la línea donde se usa `expect`, en el primer parámetro agrega la propiedad que quieres probar, el siguiente paréntesis es para indicar el valor que esperas obtener.

```
expect(myMissionCommander.name).toBe("Woopa");
```

18. Ejecuta la prueba nuevamente, y verifica que no haya fallos. 
19. NO CONFÍES EN UNA PRUEBA QUE NO HAS VISTO FALLAR. Modifica de nuevo tu prueba de unidad, cambia el valor que esperas por otro totalmente diferente. Corre de nuevo tu prueba y verifica que este fallando. ES IMPORTANTE VERIFICAR QUE TU PRUEBA PASE PERO TAMBIÉN QUE FALLÉ. 

¡Felicidades: ya sabes pruebas de unidad!

# FINAL

Al final de realizar esto deberás haber entendido:

- Cómo crear un nuevo proyecto de js.
- Cómo agregar dependencias nuevas a tu proyecto, dónde se guardan y cómo versionarlo correctamente.
- Cómo exportar una clase y cómo importarla en otro archivo para usarla.
- Cómo habilidar nuevos comandos con NPM en tu proyecto.
- Cómo agregar una prueba de unidad básica con JEST.

¿Dónde aprender más?
- https://www.w3schools.com/nodejs/nodejs_npm.asp
- https://jestjs.io/
- https://martinfowler.com/bliki/UnitTest.html

