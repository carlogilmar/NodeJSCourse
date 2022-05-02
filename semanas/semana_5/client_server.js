# Cliente Servidor

# Prepara tu app

Vamos a utilizar la app que acabas de realizar. (El API con conexión a db con Prisma)

1. Ve a tu proyecto y agrega una nueva dependencia: `npm install cors --save`.

Dado que permitiremos que una app consuma nuestra API, a través del CORS vamos a poder habilitar: https://developer.mozilla.org/es/docs/Web/HTTP/CORS

2. Nuestra app cliente estará en la siguiente URL: `http://localhost:8081`. Agrega lo siguiente en el `server.js`:


