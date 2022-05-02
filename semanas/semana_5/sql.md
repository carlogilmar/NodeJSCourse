# Mini tutorial de SQL 

# Instalación de Postgresql

1. Descarga e instala el motor de base de datos relacional PostgreSQL en tu Sistema Operativo: [download](https://www.postgresql.org/download/)
2. Ten en cuenta que esto puede variar según tu SO. 
3. Entra a la línea de comando de tu postgresql (Busca poder usar el comando `psql` en tu terminal).
4. Tendrás que hacer login del usuario que creaste en tu instalación.
5. Una vez después del login, ejecuta el comando `\l` para ver todas las bases de datos locales.
6. Crea tu primera base de datos: `create database launchx_nodejs;` (no olvides el punto y coma al final)
7. Seleciona la base de datos creada: `\c launchx_nodejs;`
8. Lista las tablas creadas: `\dt`
9. Crea una nueva tabla: `CREATE TABLE explorers(id bigserial, username varchar(50));`
10. Vuelve a listar las tablas creadas, deberías poder ver la tabla `explorers`.

![feeshipping1](https://user-images.githubusercontent.com/17634377/166174492-acb10dc2-ac7d-4773-8726-4c867a87065c.gif)

11. Agrega un nuevo registro a la tabla creada anteriormente:

```sql
insert into explorers(id, username) values (1, 'Explorer1');
```

12. Agrega 5 registros más siguiendo el ejemplo anterior:
```sql
insert into explorers(id, username) values (1, 'Explorer1');
insert into explorers(id, username) values (2, 'Explorer2');
insert into explorers(id, username) values (3, 'Explorer3');
insert into explorers(id, username) values (4, 'Explorer4');
insert into explorers(id, username) values (5, 'Explorer5');
```

13. Lee los registros de la tabla explorers: `select * from explorers;`
14. Lee solo los nombres de todos los registros de la db: `select e.username from explorers e;`
15. Actualiza el valor del primer nombre del explorer con ID 1: `update explorers e set username = 'Explorer 1 Upd' where e.id = 1;`
16. Elimina el explorer con ID 1: `delete from explorers e where e.id = 1;`

![feeshipping1](https://user-images.githubusercontent.com/17634377/166174557-15f123f9-94a9-4d8e-82dd-146e35bc199b.gif)

Objetivos de esta práctica:
- Instalar Postgresql
- Usar la línea de comando de Postgresql
- Crear un db desde la terminal
- Crear un tabla desde la terminal
- Aprender a realizar las operaciones básicas: crear, actualizar, leer y eliminar.

El uso de SQL en el día a día es vital, por lo que cualquier curso completo que puedas tomar solo te dará mejores habilidades para complementar tu formación como developer. Te recomiendo mucho buscar cursos y tutoriales sobre este tema, puedes invertir en el siguiente gran libro: https://www.practicalsql.com/index.html


# Editor de SQL

Te recomiendo mucho utilizar algún editor de SQL que te ayudará a realizar SQL de una forma más práctica que en la terminal:
- https://www.practicalsql.com/index.html
- https://www.pgadmin.org/download/
- https://eggerapps.at/postico/
- https://popsql.com/

