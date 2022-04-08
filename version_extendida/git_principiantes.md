# Git Para Principiantes

Post escrito por @carlogilmar, septiembre 2016.

Pueder leer el post original aquí: [Blog de @carlogilmar](https://carlogilmar.xyz/blog/posts/git_para_principiantes/)
También te recomiendo ver esto: [Resume Git Commands](https://carlogilmar.xyz/blog/posts/git-resume/)

# Para iniciar...

Recientemente he descubierto el gran y amplio mundo que implica el uso de la herramienta Git para proyectos de software.

Aún buscando entre tutoriales, y libros, el primer acercamiento es algo similar a lanzarse a un mar sin saber nadar, por ello mismo lo primero que hice fue hacer uso de la Facilitación Gráfica para poder contar con una historia que era Git y cómo funcionaba. Aquí va la primera entrega de lo que espero sean muchas.

Este querido amigo nos servirá para monitorear los archivos de un proyecto, y así controlar las versiones y avances.

Les presento al R2D2-Git y las funciones básicas para tenerlo funcionando en un proyecto.

![image](https://user-images.githubusercontent.com/17634377/162484061-87ba0fb8-2344-4871-bf6a-84dcb9ad4e76.png)

Git se ejecuta dentro de la carpeta principal de nuestro proyecto y reconoce TODO lo qué hay dentro.

![image](https://user-images.githubusercontent.com/17634377/162484098-f83015e1-3e6f-43eb-80ed-45fe6c6dfa26.png)

Entonces, a partir de ese momento ya no estarás solo en el desarrollo del proyecto, porque Git estará para apoyarte.

Git verá todos los archivos, pero es necesario indicarle los archivos que deseamos versionar.

Veamos como ir usando Git poco a poco.

---
# ESTADO DE LOS ARCHIVOS QUE MONITOREA GIT

Primero debemos preguntarle qué ve en nuestro proyecto el pequeño amigo Git, el hablara con la verdad y dirá cada archivo qué hay que no este monitoreando.

![image](https://user-images.githubusercontent.com/17634377/162484133-df5024d3-a8d0-4d40-97f4-4f6583391457.png)

---
# DILE A GIT DONDE PONER EL OJO

Una vez que sabemos el estado de aquello que no está monitoreando, podemos indicarle a Git qué archivo debe monitorear, podemos iniciar por uno.

![image](https://user-images.githubusercontent.com/17634377/162484191-26688bbe-8c78-4a2e-84db-1298684caefe.png)

Si volvemos a pedirle el STATUS, verás que ya no cuenta el archivo agregado.

---

# AL CONFESIONARIO CON GIT

Una vez que Git ya está monitoreando el archivo, habrá que indicarle una descripción corta de qué es el archivo, qué se modificó, etc.

![image](https://user-images.githubusercontent.com/17634377/162484221-174873ee-cc59-42a1-a9fa-feaf1d5721f0.png)

---

# REPETIR

Si agregamos un archivo (ADD) dentro del proyecto, y le damos un COMMIT, entonces estará siendo monitoreado por Git. Es necesario ir agregando cada archivo a Git mediante el ADD-COMMIT.

![image](https://user-images.githubusercontent.com/17634377/162484247-be16c9a0-5dab-4388-b33c-e1c57de4ec79.png)
![image](https://user-images.githubusercontent.com/17634377/162484270-709ba831-991c-4978-8b68-1665802e2e52.png)

Una vez que el STATUS no muestre ningún archivo, tendremos nuestro proyecto versionado bajo la mirada y el monitor de Git.

Si modificaramos un archivo, automáticamente el STATUS mostrará que hubo un cambio e indicará el archivo, de igual forma lo hará si se añaden nuevos archivos al proyecto.

![image](https://user-images.githubusercontent.com/17634377/162484296-261db6b7-0b31-484c-b2c7-b6d4fa11a672.png)

Es posible identificar las diferencias existentes en un archivo, bastará con indicarle a git.

Y finalmente aplicaremos el ADD y COMMIT para monitorearlo por Git.

Notarán que Git irá diciendo que está funcionando sobre algo llamado "Master", que es la rama principal, y creada por defecto, que será tema para otra entrega.

# Review

Comandos de esta publicación de Git

```
git init //Para iniciar Git en tu proyecto

git status //Para ver los archivos no monitoreados

git add file.sm //Indicarle a git que contemple un archivo

git commit -m "Descripcion" //Indicarle una descripcion del archivo agregado anteriormente

git diff file.sm //Git te mostrará las modificaciones

```
