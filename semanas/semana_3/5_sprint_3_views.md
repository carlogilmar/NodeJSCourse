# ⭐️ 5. Sprint 3: Agregar vistas
Requerimientos

```markdown

Crea una clase llamada `UserView` que servirá para interactuar con el modelo `User` a través de `userService`. Crea un método en esta clase llamado `create User` que sirva para crear un nuevo objeto user a partir de un `payload`, quiero decir un objeto que contenga información para crearlo.

Requerimientos:
1. Valida que al enviar en el `payload` un valor `null`, obtenga un objeto con la llave `error` y el valor indique `payload no existe`.
2. Valida que un `payload` contenga en alguna de las llaves `username`, `name`, o `id` un valor en `null`. Si hay un valor `null` regresa un objeto con la llave `error` y que indique el texto: `necesitan tener un valor válido`.
3. Valida que un `payload` con algunas de las propiedades necesarias regrese un objeto con la llave `error` indicando `necesitan tener un valor válido`.
4. Verifica que se pueda crear un objeto `User`, al enviar un payload con las siguientes propiedades: `username`, `id` y `name`.
```

#  Requerimiento 1

![image](https://user-images.githubusercontent.com/17634377/163698823-1389d99e-6d63-47fb-8967-1067ac0ca660.png)

# Requerimiento 2

![image](https://user-images.githubusercontent.com/17634377/163698844-37afaced-6726-4aac-a3dc-48e365982d81.png)

# Requerimiento 3

![image](https://user-images.githubusercontent.com/17634377/163698847-3bf06b75-58e3-4a48-8d95-380a91de72d4.png)

# Requerimiento 4

![image](https://user-images.githubusercontent.com/17634377/163698852-df039327-e818-4d37-8e31-3205b9be611c.png)
