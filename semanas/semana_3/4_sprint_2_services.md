# ⭐️ 4. Sprint 2: Agregar servicios

Si llegaste a este punto ya sabes:

- Crear nuevos proyectos de js con npm.
- Agregar dependencias.
- Agregar Jest como dependencia para pruebas de unidad.
- Hacer pruebas de unidad con Jest.
- Si no has revisado la documentación de Jest, ve al sitio oficial a leer más del tema.
- Conoces cómo funciona TDD y sabes quienes son Ken Beck y Martin Fowler.
- Versionar paso a paso tus cambios en el proyecto.

# Requerimientos del Sprint 2: Interacción con el modelo

```
Requerimiento 1: Crear un nuevo usuario con lo ya definido en el sprint anterior, usando una nueva clase llamada `UserService`.
Criterios de aceptación:
1. Esta clase deberá tener un método `create` que se pueda usar sin instanciar (static method), y que reciba solo los parámetros del `id`, `username` y `name`. 
2. El valor de `bio` deberá ser por default para todos los `user` creados.

Requerimiento 2: Agregar un nuevo método estático en `UserService` llamado `getInfo` que al recibir un objeto de la clase `User`, me regrese una lista con todos los valores de los atributos de dicho objeto.

Requerimiento 3: Agregar un nuevo método estático en `UserService` llamado `updateUserUsername`, que reciba un objeto de la clase `User` y un nuevo string, que actualizará el valor de `username`. 

Requerimiento 4: Agregar un nuevo método estático en `UserService` llamado `getAllUsernames`, que recibirá una lista de objetos de la clase `User`, y regresará la lista de todos los usernames de dichos objetos. 
```

# Requerimiento 1: Solución paso a paso

```
Requerimiento 1: Crear un nuevo usuario con lo ya definido en el sprint anterior, usando una nueva clase llamada `UserService`.
Criterios de aceptación:
1. Esta clase deberá tener un método `create` que se pueda usar sin instanciar (static method), y que reciba solo los parámetros del `id`, `username` y `name`. 
2. El valor de `bio` deberá ser por default para todos los `user` creados.
```

1. Crea los siguientes archivos: `app/services/UserService.js` y `test/services/UserService.test.js`.
2. En el archivo `UserService.test.js` agrega una prueba que cubra el requerimiento 1. No olvides importar la clase UserService.

![image](https://user-images.githubusercontent.com/17634377/163698426-2db0c245-9bbd-4446-8acd-9a0863be7be1.png)

3. Corre la prueba y verifica que falle.
4. Agrega el código en `UserService.js` para hacer pasar la prueba. 

![image](https://user-images.githubusercontent.com/17634377/163698446-f2824804-e3b2-457f-8cf3-e4bbea1421c1.png)

5. Corre tu prueba y verifica que esta vez pase. 

# Requerimiento 2: Prueba de unidad

Bien, ya viste el flujo:
1. Escribe primero tu prueba con el caso a probar.
2. Verifica que tu prueba falle.
3. Escribe el código necesario.
4. Haz que la prueba pase.

Te ayudo con la prueba de unidad que deberás hacer pasar para este requerimiento:

![image](https://user-images.githubusercontent.com/17634377/163698477-21aa6acc-cd50-43e9-baf8-587ac7a75165.png)

# Requerimiento 3

Agrega la siguiente prueba y hazla pasar:

![image](https://user-images.githubusercontent.com/17634377/163698486-330ae4e3-61d2-4830-b6d5-f1a17fc6e61d.png)

# Requerimiento 4

Agrega la siguiente prueba y hazla pasar:

![image](https://user-images.githubusercontent.com/17634377/163698492-807af040-78f9-4103-81ce-db53af3c1a5b.png)




