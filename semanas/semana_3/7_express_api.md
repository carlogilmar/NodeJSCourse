# ⭐️ 7. Mi primer API

1. Crea un nuevo proyecto de js llamado `express_api`, y agrega express como dependencia.
2. Crea un archivo llamado `app.js` y agrega una app de express:

```js
// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})
```

# GET Crea un endpoint que regrese una lista de explorers

1. Utiliza el método GET de express para este endpoint
2. Crea algunos objetos y regresa la lista como se indica.
3. Agrega el código `HTTP CODE 200` en el request:

![image](https://user-images.githubusercontent.com/17634377/163704396-f9c4ab2d-0aeb-4a00-9cc1-1507388c2b47.png)

4. Levanta tu server `node app.js`.

# Probando tu Endpoint

Hay muchos clientes para probar endpoints (puedes buscarlo como HTTP Clients). Te recomiendo descargar [Postman](https://www.postman.com/).

1. Instala Postman.
2. Descarga el siguiente archivo: [LaunchX.postman_collection.json (1).zip](https://github.com/LaunchX-InnovaccionVirtual/MissionNodeJS/files/8515523/LaunchX.postman_collection.json.1.zip)

3. En Postman importa el archivo descargado. (Contiene todos los requests necesarios para esta práctica)

![test](https://user-images.githubusercontent.com/17634377/163704544-ae9ef6c4-3e25-4481-a483-3cfaefe27e5c.gif)

4. Elige el primer request GET y da click en el botón `SEND`.
5. Verifica que te responda la información esperada.

![test](https://user-images.githubusercontent.com/17634377/163704616-c43526c2-6bd7-4662-8cca-970863775850.gif)

# GET Crea un endpoint que te regrese un explorer mediando un ID 

1. Agrega el siguiente código:

![image](https://user-images.githubusercontent.com/17634377/163704656-f916d306-af9f-4532-8cac-9e6b69091eda.png)

2. Recuerda parar y volver a levantar tu server para ver tus cambios recientes.
3. Prueba el request 2 de postman.

# POST Crea un endpoint que se encargue de crear un explorer 

1. Agrega el siguiente código:

![image](https://user-images.githubusercontent.com/17634377/163704695-c4c3c9dc-4922-4db1-acc1-f550562bafb6.png)

2. Nota que el `status code` es 201.
3. Prueba el request 3 de postman.

# PUT Crea un endpoint que se encargue de actualizar un explorer

1. Agrega el siguiente código:

![image](https://user-images.githubusercontent.com/17634377/163704739-d2d44eff-499f-46be-bc8f-4ddcc4d3abbb.png)

2. Prueba el request 4 de postman.

# DELETE Crea un endpoint para eliminar un explorer

1. Agrega el siguiente código:

![image](https://user-images.githubusercontent.com/17634377/163704760-fa8d67d4-bd16-489e-940e-dd5703b3eafa.png)

2. Prueba el request 5 de postman.
