# 6 API REST Trello

1. Abre una cuenta de Trello https://trello.com/
2. Para jugar con el API Rest de Trello necesitamos un api key y un token que puedes solicitar aquí: https://trello.com/app-key
  - Ve al portal
  - El primer valor que te mostrará es tu API KEY, guárdalo muy bien.
  
  ![image](https://user-images.githubusercontent.com/17634377/164958156-ae24332b-8e4f-40ee-9f40-27a42b378882.png)
  
  - Da click en el enlace a TOKEN 
  
  ![image](https://user-images.githubusercontent.com/17634377/164958164-0ab4995b-3545-4c5d-9b99-01791c996bbe.png)
  
  - Te pedirá autorizar tu petición:
  
  ![image](https://user-images.githubusercontent.com/17634377/164958181-1879ad6b-7d3b-4ddd-a114-e300e5c57c15.png)
  
  - Enseguida te mostrará el TOKEN:
  
  ![image](https://user-images.githubusercontent.com/17634377/164958203-9d727c03-9b03-4592-b998-de0a805492a8.png)

3. Guarda muy bien tu API KEY y TOKEN (estos valores son como tu usuario y password, ES INFORMACIÓN SENSIBLE).

![image](https://user-images.githubusercontent.com/17634377/165356364-0fa837e2-2b75-46b1-9bc5-9d009d869439.png)

4. Visita la documentación del Api Rest de Trello https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-group-boards
   - Busca cómo crear un nuevo board.
   - Busca cómo obtener la información de un board a partir de su ID
   - Busca cómo obtener la lista de cards de un board
   - Busca cómo crear una nueva card en un board

5. Descarga el siguiente archivo de postman e importalo en tu postman: [ ACTUALIZADO Trello API LaunchX.postman_collection.json.zip](https://github.com/LaunchX-InnovaccionVirtual/MissionNodeJS/files/8585319/Trello.API.LaunchX.postman_collection.json.zip)


# Juega con el Api de Trello con las peticiones armadas de postman: Crea un tablero.

6. Ahora sí ve a la siguiente petición para crear un board `POST Create board`:
<img width="331" alt="image" src="https://user-images.githubusercontent.com/17634377/164958315-1bf2f957-ff16-4dc4-9473-7412943636fe.png">

7. En la sección de `params`, llena los valores (aquí incluye tu api key en el campo `key` y el token en `Token`):
<img width="943" alt="image" src="https://user-images.githubusercontent.com/17634377/164958333-3ebb95d7-3ad1-47e4-8b66-7347f64ab53e.png">

8. Da click en SEND, mira el response y verifica que tu tablero nuevo se halla creado.

![test](https://user-images.githubusercontent.com/17634377/164958461-98c7570c-dc77-4d40-b9fe-fe69b2660970.gif)

9. Del response, hay un campo `id` que corresponde al ID del tablero que acabas de crear, guárdalo.

![image](https://user-images.githubusercontent.com/17634377/164958474-ae31d46a-3af5-4bf5-afdd-1189b4b632fe.png)

# Obtén la lista de columnas de tu board creado

10. Abre el siguiente request: 
![image](https://user-images.githubusercontent.com/17634377/164958552-5862ca7d-ef96-4bad-af4c-cc92791ade2b.png)

11. Agrega tu API KEY y TOKEN. 
12. Modifica la url, justo después de `/1/boards/` quita el valor que esta ahí y pon el ID de tu board creado anteriormente.

```
https://api.trello.com/1/boards/BOARDID/lists?key=APIKEY&token=TOKEN
```

13. Envía tu request, y verifica la información que rexcibes. Deberás ver la lista de columnas que tienes en tu tablero:

![image](https://user-images.githubusercontent.com/17634377/164958638-23154b5a-a829-4793-b4da-907c28faa858.png)

14. Toma el ID del primer registro que corresponde a la primer columna.

# Agrega nuevas cards a la primer columna de tu tablero

15. Abre el request POST `Create Card By List Id`:
![image](https://user-images.githubusercontent.com/17634377/164958673-2e923266-a607-42ba-a322-d8c8dbd73fa0.png)

16. Agrega los parámetros necesarios: `idList`(el id de la primer columna del paso anterior), `key`, `token`, y `name` (este es el título de tu card nueva).

17. Envía tu request y verifica que la respuesta sea éxitosa. Verifica que efectivamente se haya creado directo en la app de trello.

![test](https://user-images.githubusercontent.com/17634377/164958749-a5ba8de9-1cd7-455a-b6e4-5d7dd89c35a4.gif)

# ¡Felicidades!

Explora la documentación del Api Rest de Trello e investiga:
- Cómo actualizar el título de una card.
- Cómo eliminar una card.

Recuerda que tu API KEY y TOKEN es información sensible. No debes de compartirla con nadie NI MUCHO MENOS VERSIONARLA Y SUBIRLA A GITHUB.
