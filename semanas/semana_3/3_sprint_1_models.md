# ⭐️ 3. Sprint 1: Agregar modelos

Bien explorer, vamos ahora a realizar un proyecto nuevo empezando desde los requerimientos:

# Twitter

```markdown

Después de evaluar tiempo y esfuerzos, el equipo de Launch X ha decidido crear la aplicación `Twitter`. Para ello han definido la primera etapa del sprint con los siguientes requerimientos a desarrollar:

SPRINT 1: Creación de un modelo
 
 Requerimiento 1: Se necesita un modelo `User` para guardar la información de un usuario de nuestra app: `id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`. 
Solución: Crear una clase User y un constructor que guarde estos parámetros. 
 
 Requerimiento 2: Las propiedades `dateCreated` y `lastUpdated` deberán ser datos de tipo fecha que guarden el momento en que se instancie un nuevo objeto de la clase `User`.
 Solución: Modifica el constructor de la clase creada y asigna un valor por defecto a estos atributos usando `new Date()`.
 
 Requerimiento 3: Cada objeto tipo user necesita los siguietes gettes: `getUsername`, `getBio`, `getDateCreated`, `getLastUpdated`.
 Solución: Agrega los getters regresando la propiedad indicada, no olvides usar `this`.
 
 Requerimiento 4: Cada objeto necesita los siguientes setters: `setUsername` y `setBio`, para actualizar dichas propiedades.
 Solución: Agrega los setters usando la palabra `set` y modificando el atributo indicado.
```

# Solución paso a paso

## Creación del proyecto

1. Crea un folder llamado `twitter`.
2. Dentro de él ejecuta `npm init`.
3. Agrega jest como dependencia.
4. Agrega los folders `app` y `test`.
5. No olvides actualizar tu `package.json` para ejecutar `npm test`. Revisa los ejercicios anteriores.

**IMPORTANTE: Puedes realizar dentro de tu playbook en `week2/playbook`**

## Estructura de carpetas

Como vamos a realizar un nuevo proyecto, necesitamos tener una buena organización en nuestros directorios:
- Crea dentro de la carpeta app, una carpeta `models` y dentro un archivo llamado `User.js`.
- Dentro de la carpeta `test` crea una carpeta llamada `models` y un archivo llamado `User.test.js`.

Nota: Para cada requerimiento nuevo de código por agregar es recomendable siempre agregar el archivo y el archivo de prueba, RECUERDA LAS PRUEBAS NO SON NEGOCIABLES, SON PARTE ESENCIAL DEL DESARROLLO DE SOFTWARE.

## Requerimiento 1 

```
Requerimiento 1: Se necesita un modelo `User` para guardar la información de un usuario de nuestra app: `id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`. 
```

Vamos a desarrollar el primer requerimiento. Para ello usaremos el enfoque de TDD porque es una gran guía para diseñar nuestro código.

1. Se tiene que crear una clase `User`, escribe una prueba de unidad con jest en la que instancies un objeto de esta clase indicando las propiedades necesarias, no olvides importar la clase `user` como se indica:

![image](https://user-images.githubusercontent.com/17634377/163697527-7908366a-57d5-40a8-933a-e3fac11b286f.png)

2. Ejecuta la prueba `npm test test/models/user.test.js` y verifica que falle. Hasta este punto el archivo `user.js` debería estar vacío.

![image](https://user-images.githubusercontent.com/17634377/163697562-2881e71a-c188-4108-9c04-5c9cd3d6ed46.png)

3. Agrega en el archivo `user.js` la clase User, agrega el constructor para recibir los parámetros necesarios y agregar los atributos. Esto ya lo hemos realizado en los ejercicios anteriores. No olvides exportar tu clase. Se vale correr la misma prueba varias veces.

![image](https://user-images.githubusercontent.com/17634377/163697614-f062b387-c354-4373-b1e1-5917d6b3f01d.png)

4. Corre la prueba de nuevo y verifica que pase. 

![image](https://user-images.githubusercontent.com/17634377/163697627-acd13fcf-4e8b-4a9c-8dfd-67d79458be35.png)

5. ¡Felicidades! Has creado tu primer requerimiento usando TDD.  

## Requerimiento 2

```markdown
 Requerimiento 2: Las propiedades `dateCreated` y `lastUpdated` deberán ser datos de tipo fecha que guarden el momento en que se instancie un nuevo objeto de la clase `User`.
```

Este requerimiento trata de modificar nuestra clase creada. 

1. Modifica la prueba de unidad creada anteriormente. Para ello modifica el código, ya no envíes los valores de `dateCreated` y `lastUpdated` al instancias la clase, y verifica en la prueba que a pesar de ya no enviarlos, no recibas un valor `undefined`.

![image](https://user-images.githubusercontent.com/17634377/163697824-f2fdd67f-f6a6-4ba0-adb4-edb752fe7576.png)

Recuerda revisar la documentación de Jest para ver que puedes verificar en tus pruebas de unidad.

2. Ejecuta tu prueba y verifica que falle.

3. Ahora si, ve a tu clase `User` y realiza las modificaciones necesarias para cumplir con la prueba.

![image](https://user-images.githubusercontent.com/17634377/163697843-077d5580-4870-485e-a137-10af5643e650.png)

4. Ejecuta la prueba y verifica que pase.
5. Felicidades ya realizaste tu segundo requerimiento usando TDD.

Si notas aquí, escribir las pruebas de unidad nos permite definir nuestro requerimiento, por eso son tan importantes y útiles. 

## Requerimiento 3

```markdown
 Requerimiento 3: Cada objeto tipo user necesita los siguietes gettes: `getUsername`, `getBio`, `getDateCreated`, `getLastUpdated`.
 Solución: Agrega los getters regresando la propiedad indicada, no olvides usar `this`.
```

1. Agrega una nueva prueba en tu archivo `User.test.js`, adicional a la que ya creamos y modificamos anteriormente en esta práctica.
2. Vamos a probar los getters requeridos en el requerimiento, así que en esta prueba escribe esos casos a probar:

![image](https://user-images.githubusercontent.com/17634377/163697947-e06e8c03-1aa0-49b0-8014-556fca8d2901.png)

3. Corre tu prueba y verifica que falle. 
4. Agrega el código que haga pasar tu prueba.

![image](https://user-images.githubusercontent.com/17634377/163697966-3d838e94-75bb-4358-919b-a46822cd375e.png)

5. Corre de nuevo tu prueba y verifica que pase. 

¿Cómo saber si tu código funciona? Por que estás validando su comportamiento mediante pruebas. Usa esta técnica para escribir software de calidad.

## Requerimiento 4

```markdown
 Requerimiento 4: Cada objeto necesita los siguientes setters: `setUsername` y `setBio`, para actualizar dichas propiedades.
 Solución: Agrega los setters usando la palabra `set` y modificando el atributo indicado.
 ```
 
1. Agrega otro caso de prueba para probar el uso de los setters que se piden:
 ![image](https://user-images.githubusercontent.com/17634377/163698022-bd77bda3-7787-4f39-aa83-e43374d38390.png)

2. Corre tu prueba y verifica que falle.
3. Agrega el código para hacer pasar dicha prueba.
![image](https://user-images.githubusercontent.com/17634377/163698036-6c0dafef-579c-4df1-aeeb-e13839d1ee4e.png)
4. Corre tu prueba y verifica que pase. 

