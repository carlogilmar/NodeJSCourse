# API: Express + DB 

# Parte 1: Conexión a Base de Datos Postgresql

1. Crea un nuevo proyecto de js (incluye el control de versiones como siempre).
2. En tu proyecto agrega la dependencia de Express y de Prisma DB (este último nos ayudará a conectarnos a Postgresql)

```
npm install express --save-dev
npm install prisma --save-dev
```

3. Inicializa prisma de la siguiente forma: `npx prisma init`. (Investiga que es el comando `npx`)
4. Después de correr el comando anterior, se deberán crear el archivo `.env` y la carpeta `prisma`.
5. En tu Postgresql crea una base de datos (solo la db) llamada: `explorers_api`.
6. Modifica el archivo `.env`, coloca tu usuario y password:

`.env`
```
DATABASE_URL="postgresql://TUUSUARIO:PASSWORD@localhost:5432/explorers_api?schema=public"
```

Este archivo es el que hará posible la conexión a tu db, para ello necesitas haber creado la db `explorers_api` como en el minitutorial de db.

7. Abre el archivo `prisma/schema.prisma` y agrega un nuevo modelo Explorer:

```
model Explorer {
  id Int @id @default(autoincrement())
  name String @unique
  username String @db.VarChar(255)
  mission String @db.VarChar(255)
  azureCertification Boolean @default(false)
  dateCreated DateTime @default(now())
  lastUpdated DateTime @updatedAt
}
```

Esta es la forma de declarar una nueva tabla en nuestra db. Revisa la documentación de Prisma: https://www.prisma.io/docs/concepts/components/prisma-schema

8. Versiona el nuevo modelo como nuevo cambio en nuestra base de datos, al versionamiento de los cambios de db se les llama `migrations` (como si fueran commits de git). Para esto corre el siguiente comando: `npx prisma migrate dev --name init`. Al terminar de ejecutar este comando habrás creato tu primer tabla de SQL usando prisma. Revisa tu base de datos y comprueba que tu tabla este ahí. Además se creará una carpeta `prisma/migrations/` que contendrá un archivo SQL con el código en SQL de la tabla creada, este código es autogenerado para ti.

![feeshipping1](https://user-images.githubusercontent.com/17634377/166177588-f056afb3-cd85-4022-a3f3-6de64481afe0.gif)

9. Crea un archivo `prisma/seed.js`, aquí puedes crear datos para insertarlos de forma automatizada en tu db:

`seed.js`
```javascript
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    console.log('Create 3 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
```

Lee el archivo anterior, agrega algunos registros más, al correr el archivo estos registros se insertarán en la db.

10. Corre el archivo anterior: `node prisma/seed.js`. Verifica que ahora tu tabla tenga algunos registros.

![feeshipping1](https://user-images.githubusercontent.com/17634377/166177664-612477c5-11fc-4634-a631-c8eca368e5f7.gif)

# Parte 2: CRUD 

1. Crea un archivo llamado `server.js`, crea un server básico agregando el cliente de Prisma, copia el siguiente ejemplo:

`server.js`
``` javascript
const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});
```

2. Corre el server `node server.js` y accede a `localhost:3000`, verifica que recibas un mensaje.

# API CRUD

3. Agrega un nuevo endpoint GET en tu `server.js` que regrese todos los explorers. Prúebalo en la url: `localhost:3000/explorers`

```javascript
app.get('/explorers', async (req, res) => {
  const allExplorers =  await prisma.explorer.findMany({});
  res.json(allExplorers);
});
```

4. Agrega un nuevo endpoint GET que te regrese el explorer al enviar un ID por query params. Prúebalo en la url: `localhost:3000/explorers/1`

```javascript
app.get('/explorers/:id', async (req, res) => {
  const id = req.params.id;
  const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
  res.json(explorer);
});
```

5. Crea un nuevo endpoint POST con el que vas a poder crear nuevos explorers. 

```javascript
app.post('/explorers', async (req, res) => {
  const explorer = {
    name: req.body.name,
    username: req.body.username,
    mission: req.body.mission
   };
  const message = 'Explorer creado.';
  await prisma.explorer.create({data: explorer});
  return res.json({message});
});
```

6. Crea un nuevo endpoint PUT, en el cuál recibirás el ID del explorer a actualizar, y en el cuerpo del request los campos a actualizar, para este caso solo haremos el update del campo mission.

```javascript
app.put('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.explorer.update({
		where: {
			id: id
		},
		data: {
			mission: req.body.mission
		}
	})

	return res.json({message: "Actualizado correctamente"});
});
```

7. Crea un nuevo endpoint DELETE para eliminar un explorer dado un ID por query params.

```javascript
app.delete('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});
```

La url para tu API será `localhost:3000/explorers`. Aquí podrás acceder por GET, POST, PUT, y DELETE. 

Puedes descargar la colección de Postman para probar todos estos endpoints: [ExplorersAPI.json.zip](https://github.com/carlogilmar/my_launchx_blog/files/8600585/ExplorersAPI.json.zip)

8. Prueba tu api, corrobora que los cambios se apliquen en tu db. Crea, lee, actualiza y elimina registros.


# Agrega una nueva tabla y crea el API

| Campo | Tipo de Dato |
|---|---|
| id | Integer (autogenerado) |
| name | String |
| lang | String |
| missionCommander | String |
| enrollments | Integer |
| hasCertification | Boolean |

1. Crea el siguiente modelo en el `schema.prisma`. Crea inmediatamente el migration para que se apliquen estos cambios.
2. Agrega un par de registros en el `seed.js`. Verifica en tu DB los nuevos registros.
3. Crea un CRUD para esta tabla en el archivo `server.js`:
  - Crea un endpoint GET para regresar todos los registros.
  - Crea un endpoint GET para regresar el registro dado el ID
  - Crea un endpoint POST para crear un nuevo registro
  - Crea un endpoint PUT para actualizar un registro
  - Crea un endpoint DELETE para eliminar un registro
