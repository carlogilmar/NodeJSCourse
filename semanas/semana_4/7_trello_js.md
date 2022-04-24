# 7 Trello JS 

Muy bien explorer hasta ahora sabes:

- Explorar proyectos que no son de tu autoría.
- Explorar un API Rest de un servicio como trello.
- Usar Postman para probar un api rest.
- Cómo funciona el api rest de trello.

# Crea un proyecto con configuración externalizada

1. Crea un nuevo proyecto de js.
2. Agrega la siguiente dependencia que nos ayudará a tener configuración externalizada:

> npm install dotenv --save

3. Crea un script llamado `app.js` con lo siguiente:

```javascript
require('dotenv').config()

if(!process.env.TOKEN && !process.env.KEY){
  throw new Error('No hay configuración con Api Key y con Token')
}
```

Al ejecutarlo debes tenes este error:
![image](https://user-images.githubusercontent.com/17634377/164959339-f6d77d6f-22d9-4605-9e9c-7dff36295e65.png)

4. Crea un archivo `.env` en la raíz de tu proyecto con el siguiente contenido, agrega tu API KEY y TOKEN de trello:

`.env`
```javascript
KEY="TrelloKeyHere"
TOKEN="Trellotokenhere"
```

5. Crea tu `.gitignore` e ignora el archivo `.env`. Como tiene información sensible NUNCA SE VERSIONA. Si llegas a versionar algún API KEY o TOKEN a GitHub, automáticamente se deshabilitará.

6. Recuerda cada vez que clones este proyecto, tendrás que crear ese archivo `.env` con tu API KEY y TOKEN de Trello.

# Agrega la dependencia de trello y explora qué puedes hacer

7. Agrega la siguiente dep: `npm install trello --save`.
8. Agrega el siguiente ejemplo:

`app.js`
```javascript
require('dotenv').config()

if(!process.env.TOKEN && !process.env.KEY){
  throw new Error('No hay configuración con Api Key y con Token')
}

let Trello = require("trello");
let trello = new Trello(process.env.KEY, process.env.TOKEN);

let cardTitle = `Card Nueva ${new Date()}`

trello.addCard(cardTitle, "LaunchX Card Description", "6264e42be72d295e64f5c083",
	function (error, trelloCard) {
		if (error) {
			console.log('Could not add card:', error);
		}
		else {
			console.log('Added card:', trelloCard);
		}
	});
```
