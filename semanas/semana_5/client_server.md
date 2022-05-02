# Cliente Servidor

# Prepara tu server

Vamos a utilizar la app que acabas de realizar. (El API con conexión a db con Prisma)

1. Ve a tu proyecto y agrega una nueva dependencia: `npm install cors --save`.

Dado que permitiremos que una app consuma nuestra API, a través del CORS vamos a poder habilitar: https://developer.mozilla.org/es/docs/Web/HTTP/CORS

2. Nuestra app cliente estará en la siguiente URL: `http://localhost:8081`. Agrega lo siguiente en el `server.js`:

![image](https://user-images.githubusercontent.com/17634377/166191613-1cf70686-b234-4b44-876a-815f1d8c5847.png)

3. Corre tu app: `node server.js`.

# Corre tu cliente

1. Ve al siguiente repo: https://github.com/visualpartnership/client-launchx
2. Crea un fork para tener una copia tuya. 
3. Clona esta copia en tu entorno local.
4. Descarga las dependencias, dentro de este proyecto ejecuta: `npm install`
5. Ejecuta tu app con el comando: `npm run serve`, con esto podrás entrar a la url: `http://localhost:8081/`

Esta es una app de Vue JS ya creada para conectarse a tu api. 

# Explora tu app

![feeshipping1](https://user-images.githubusercontent.com/17634377/166192146-89cd6b72-f6f3-47f3-abe8-e309c0fd8275.gif)

# Actividad

1. Revisa la app del front, es una app de Vue 3
2. La dependencia `Axios` nos permite realizar las peticiones HTTP al server, investiga cómo funciona. Lee el archivo `src/http-common.js`.
3. Ve al archivo `src/services/ExplorerService.js`
4. En la carpeta `components` están los componentes usados de Vue: template y script.
5. Realiza un diagrama de cómo funciona este proyecto de Vue JS, incluye cómo funciona el `router.js`, los templates, los services y los componentes. 
6. Este diagrama te servirá más adelante para comenzar a agregar nuevos features en este proyecto. Esta actividad tiene por propósito leer una app legada de frontend.
7. Incluye estos diagramas en tu fork. 

# Nuevo Feature Fullstack

`missionCommander`
| Campo | Tipo |
|---|---|
| id | Integer (autogenerado) |
| name | String |
| username | String |
| mainStack | String |
| currentEnrollment | Boolean |
| hasAzureCertification | Boolean |

1. Crea la tabla nueva anterior. Agrega unos registros por medio de los seeds.
2. Crea un CRUD expuesto en un API en el `server.js` (métodos GET, POST, PUT, DELETE, recuerda que el método GET deberá tener 2 endpoints, uno para traer todos los registros y otro para consultar solo el registro por ID).
3. En la pantalla inicial del front, consulta todos los registros en esta tabla y muéstralos. Tú decides el diseño.
4. Agrega la posibilidad de agregar uno nuevo.
5. Agrega la posibilidad de editar el `mainStack`.
6. Agrega la posibilidad de eliminar el registro.
