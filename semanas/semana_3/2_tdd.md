# ⭐️ 2. Diseño de Software con TDD

Después de haber realizado la práctica #1, habrás entendido los pasos básicos para cualquier proyecto de software. Ahora te voy a mostrar una técnica de trabajo que te ayudará a diseñar tu app. Es importante recalcar que estos conceptos los puedes trasladar a cualquier otro ámbito del software, o lenguaje de programación.

# I Creación de un nuevo proyecto

1. Crea un nuevo proyecto de js, agrega jest para realizar pruebas de unidad:
  1. Crea carpeta nueva llamada `spiderverse`.
  2. Ejecuta `npm init` para crear el archivo `package.json`.
  3. Ejecuta `npm install --save-dev jest` para agregar jest.
  4. Modifica tu archivo `package.json`, para que al ejecutar el comando `npm test` podamos ejecutar jest. 
  ![image](https://user-images.githubusercontent.com/17634377/163658497-d189aaf8-9f8f-4bf8-b61f-e34ab1c08de7.png)
  5. NO OLVIDES JAMÁS DEJAR DE VERSIONAR TODOS TUS PROYECTOS

Si tienes dudas con esto anterior, revisa tu práctica anterior porque es justo lo que hicimos ahí.

2. Crea de igual forma dos directorios `app` y `test`, y crea en la raíz el archivo `index.js`.

# II Agregando una prueba de unidad vacía

3. En la carpeta `test.js` agrega una prueba de unidad en jest que este fallando, crea el archivo `spiderman.test.js`:

`spiderman.test.js`
```js
describe("Test Suite Dummy Description", () => {
  test('Case 1 Dummy', () => {
    const resultOfSomething = 1 + 2
    expect(resultOfSomething).toBe(18);
  });
})
```

4. Verifica que esta prueba este fallando, como debería ser (`npm test test/spiderman.test.js`). 
![image](https://user-images.githubusercontent.com/17634377/163658513-717124e1-6b11-47e8-ba8a-b3d475fc8246.png)

# III Test Driven Development by Martin Fowler

```
TDD Design Software Technique

1. Write a test for the next bit of functionality you want to add.
2. Write the functional code until the test passes.
3. Refactor both new and old code to make it well structured.
```

Referencia: [TDD by Martin Fowler](https://martinfowler.com/bliki/TestDrivenDevelopment.html)

Para este punto debes tener un proyecto nuevo de js, con un `package.json`, con jest como dependencia, con una estructura de directorios y una prueba que falla, y versionado. NO OLVIDES VERSIONAR TUS PROYECTOS DE SOFTWARE.

Ahora vamos a aplicar la técnica de TDD.

#  Step 1: Write a test for the next bit of functionality you want to add

## Requerimiento

> Crea una clase spiderman que tenga como atributos los siguientes campos: nombre, edad, actor que lo interpretó, número de películas en las que apareció, estudio de cine.

5. Vamos a modificar la prueba de unidad que ya escribiste. Para ello vamos a agregar una descripción más explícita del caso que queremos probar, y en el cuerpo vamos a declarar el código y cómo quisieramos usarlo.

![image](https://user-images.githubusercontent.com/17634377/163658624-d7eaff6b-d6f3-4d2f-8261-06e660d1979e.png)

6. Corre de nuevo esta prueba y verifica que esta fallando. Esto es correcto porque no tenemos ninguna clase definida. Si miras bien la descripción que obtienes al correr la prueba te dirá por dónde comenzar.

![image](https://user-images.githubusercontent.com/17634377/163658546-c5647180-82d8-4a93-a3be-0cbf2651701b.png)

El error marcado indica `ReferenceError: Spiderman is not defined`. Esto es porque no hay ninguna clase `spiderman` disponible.

# Step 2: Write the functional code until the test passes.

7. Escribe el código necesario para solucionar el error mostrado. Para ello es necesario crear una clase `spiderman`, para ello crea un archivo en la carpeta `app` llamado `spiderman`, crea una clase con el nombre solicitado y exportala como lo hicimos en el ejemplo anterior:

![image](https://user-images.githubusercontent.com/17634377/163658612-316994bb-2c7f-4eae-b907-5fdb153b687d.png)

8. Ahora importa esta clase en tu archivo `spiderman.test.js`.

![image](https://user-images.githubusercontent.com/17634377/163658656-bec40bcd-ab5c-4322-92e5-cd176710c325.png)

9. Ejecuta de nuevo tu prueba de unidad. De nuevo deberá fallar, pues solo agregamos una clase vacía. Sin embargo deberías obtener un error diferente. 

![image](https://user-images.githubusercontent.com/17634377/163658677-c773b14d-1fce-43e4-8623-8b4685f14315.png)

En este caso nuestro error ha cambiado, ahora muestra un error: `expect(received).toBe(expected) // Object.is equality`. Debajo encontramos dos valores: `expected` y `Received`, y podemos ver que esta equiparando dos valores, de los cuáles uno es `undefined`. Esto es correcto ya que no hemos agregado ningún atributo a nuestra clase. 

10. Arregla el error anterior. Para ello el objeto de la clase `Spiderman` necesita tener un atributo llamado `name`, y necesitas guardarlo al crear dicho objeto. (Para esto necesitas agregar un constructor y guardar ahí ese atributo)

![image](https://user-images.githubusercontent.com/17634377/163658888-24f9bbdf-5133-41ad-969e-1e792d3bfb37.png)

11. Corre de nuevo la prueba y verifica que el error ya no sea el mismo.

![image](https://user-images.githubusercontent.com/17634377/163658800-c21f0ff4-0541-4e6a-af2f-1ccf0d12852e.png)

En este caso la primera validación referente a `name` ya no es marcada como error, ahora necesitamos agregar la siguiente propiedad.

# Step 3: Refactor both new and old code to make it well structured.

Una vez que hayas agregado los demás atributos y tu prueba ahora sí pasa todos los caso exitosamente.

![image](https://user-images.githubusercontent.com/17634377/163658973-6ffc5af8-6149-4f21-aa76-7784ab9aa560.png)

Recuerda: NO CONFÍES EN UNA PRUEBA QUE NO HAS VISTO FALLAR. Juega con tu prueba de unidad y modifica los valores para pruebes casos que hagan fallar tu prueba.

Una vez que la prueba de unidad pase correctamente estás autorizado a modificar tu archivo que estás probando, en este caso `spiderman.js`, para mejorarlo, a esto se le llama REFACTOR. Un refactor se aplica solo cuando tienes una prueba de respaldo, que te indicará que tus mejoras al código no rompen el comportamiento que necesitas.

# Tu turno 😁

12. Realiza el siguiente requerimiento en tu proyecto:

```
Queremos usar un método que nos regrese la siguiente información: nombre y estudio al que pertenece el spiderman instanciado.

Ejemplo:

tomHolland.getInfo() // esto necesita regresar: "Hey, I'm Tom Holland from Marvel studio"
```

Aquí te dejo la prueba escrita, agrégala, y luego corre esta prueba, que falle, y agrega el código para que pase.
![image](https://user-images.githubusercontent.com/17634377/163659603-b2447c0c-d8d5-45ed-87bb-8700804c3409.png)

Solución: Agrega un nuevo método a tu clase spiderman llamado `getInfo()`, recuerda usar la palabra `return` para regresar un `string` con interpolación donde puedas agregar las propiedades `actor` y `studio` de la forma en que describió la prueba, no olvides usar  `this` para referirte al contexto del objeto y así acceder a sus atributos. Esta práctica hace uso de elementos ya vistos.

# FELICIDADES 🏆

Has aprendido a realizar TDD:

1. Escribe una prueba de unidad.
2. Dentro de la prueba escribe el código tal cuál necesitas usar. 
3. Corre la prueba y verifica que falle, pues no hay nada que probar.
4. Escribe el código necesario para resolver el error que te marca la prueba al fallar. 
5. Continua paso a paso hasta hacer que la prueba pase.
6. Una vez que la prueba pase, puedes refactorizar tu código, teniendo en cuenta que tu prueba debe estar pasando.
7. Repite este procedimiento cuantas veces sea necesario. De esta forma garantizas que tu código funciona. Puedes agregar todas las pruebas de unidad que gustes, son gratis.

TODO CÓDIGO DEBE ESTAR RESPALDADO POR PRUEBAS

La próxima vez que programes algo, recuerda usar esta técnica para ir diseñando paso a paso, y recuerda que las pruebas son muy importantes.
