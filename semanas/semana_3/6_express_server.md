# ⭐️ 6. Mi primer server con Express.js

Explorer, por fin llegamos al punto clave: crear apps de backend.

## Crear mi primer server

1. Crea un proyecto nuevo `express_basic`.
  - Crea una carpeta con este nombre.
  - Ejecuta el comando `npm init` y que se cree el archivo `package.json`.

2. Instala la dependencia express: `npm install express --save`
3. Crea un archivo llamado `app.js` y crea tu primera app de express:

![image](https://user-images.githubusercontent.com/17634377/163703958-41c5a084-1531-4bc3-8119-6d87d6cb9fc5.png)

4. Corre tu app con el comando `node app.js`. Esto hará que tu app se quede en ejecución.
5. Entra a tu navegador a `localhost:3000`

![image](https://user-images.githubusercontent.com/17634377/163703992-c7e68d24-9954-4b6e-ab5e-cd1d24e6e6a4.png)

Felicidades, esta es un servidor de Node JS.

## Agregar una nueva ruta

6. Agrega una ruta nueva para poder responder algo en la url `localhost:3000/launchx`.

![image](https://user-images.githubusercontent.com/17634377/163704030-4d945b1e-c4fd-4ea1-8f2f-52a4a8502dcb.png)

7. Después de agregar el código anterior, recuerda parar tu servidor y volver a iniciarlo para que puedas ver tus cambios.
8. Verifica que puedes entrar a `localhost:3000/launchx`.

## Agregar nueva ruta para regresar un objeto

9. Agrega una nueva ruta y regresa un objeto:

![image](https://user-images.githubusercontent.com/17634377/163704099-2263aa18-3b33-48e9-93a3-6c29078b2991.png)

10. Para tu server, y vuelve a levantarlo para que tome tus cambios recientes `node app.js`.
11. Entra a la url `localhost:3000/explorersInNode` para verificar que regresa el objeto que indicaste.

![image](https://user-images.githubusercontent.com/17634377/163704123-71b5430f-7695-4bb2-9f84-8526c4d2279d.png)

## Agregar una nueva ruta que reciba Query Params

12. Agrega una nueva ruta, indica que recibirá un parámetro: `/explorers/:explorerName`, esto indicará que `:explorerName` será un valor enviado por la url.
13. El objeto `req` contiene la propiedad `params`, esta propiedad contiene los `Query Params` (parámetros) enviados por la url. (req.params)

![image](https://user-images.githubusercontent.com/17634377/163704182-3fb6f2d8-cd67-45eb-b08b-deca01ddee13.png)

14. Entra a la url `localhost:3000/explorers/soyElExplorerCarlo`.

![image](https://user-images.githubusercontent.com/17634377/163704202-055c26e4-bfe4-4b44-b25f-2e89777af903.png)




