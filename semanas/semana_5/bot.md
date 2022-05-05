# Bot Telegram

# Parte 1: Crea un nuevo bot de telegram

1. Descarga y crea una cuenta de telegram.
2. Accede al Bot Father: https://telegram.me/BotFather
3. En el chat del bot father envía un mensaje con el texto: `/newbot`
4. Te pedirá un nombre para tu bot, nombralo: `FizzbuzzLaunchXBot`
5. Guarda el token de tu nuevo bot, esta es información sensible `5112341234:AAFB-c7Jau2TNt0-s6ioQGOAiUtqcsdewdwedwo`.
6. Así mismo te dará una url para que abras un nuevo chat con tu bot, enseguida presiona el botón de START, necesitas realizar este paso.

<img width="560" alt="image" src="https://user-images.githubusercontent.com/17634377/166179366-739dc4df-d992-4fac-bd9b-91a31b6e9e50.png">

# Parte 2: Fizzbuzz

1. Abre tu proyecto de fizzbuzz que trabajaste la semana 4. 
2. Instala la dependencia: `npm install node-telegram-bot-api --save`
3. Crea un nuevo script llamado `lib/bot.js`
4. Modifica tu `package.json`, dentro de scripts agrega: `"bot": "node ./lib/bot.js"`
5. En tu archivo `bot.js` agrega el siguiente contenido:

```javascript
const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controllers/ExplorerController");

// replace the value below with the Telegram token you receive from @BotFather
const token = "";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const numberToApplyFb = parseInt(msg.text);

    if(!isNaN(numberToApplyFb)){
        const fizzbuzzTrick = ExplorerController.applyFizzbuzz(numberToApplyFb);
        const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
        bot.sendMessage(chatId, responseBot);
    } else {
        bot.sendMessage(chatId, "Envía un número válido");
    }

});
```

Verifica:
- Aquí agrega el token que te dió el Bot Father: `const token = "";`
- Verifica que este bien la ruta de tu ExplorerController
- Lee y entiende qué se realiza en la última función.
- Recuerda no versionar tu token.

6. Corre tu nuevo bot: `npm run bot`
7. Ve a tu chat con el nuevo bot y cada que envíes un número deberá darte la validación del fizzbuzz. Cualquier otro valor te madnará un mensaje de error.

![feeshipping1](https://user-images.githubusercontent.com/17634377/166179509-21ba2a57-e6a4-4b74-a36e-73b0597702da.gif)

8. Refactoriza el snippet de código anterior y envíalo al ExplorerController.
9. Valida que al enviar la palabra "node" o "java", regreses al bot la lista de nombres de los explorers de esa misión. Recuerda que el bot solo puede recibir un string, tendrás que armar ese string con los nombres. No olvides agregar una prueba para generar ese string. No es necesario que hagas pruebas de la funcionalidad del bot.
