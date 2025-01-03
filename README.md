# Finca Project

Este proyecto es una aplicación Node.js para gestionar las finansas en una finca productora de café. Utiliza Express.js para manejar las rutas y Sequelize como ORM para interactuar con la base de datos.

## Requisitos

- Node.js (v14 o superior)
- npm (v6 o superior)
- Base de datos compatible con Sequelize (por ejemplo, MySQL, PostgreSQL, SQLite)

## Instalación

1. Clona el repositorio:

   ```sh
   git clone https://github.com/yeinerpb/finca.git
   cd finca
   ```

2. Instala las dependencias:

   ```sh
   npm install
   ```

3. Configura la base de datos en [database.js](http://_vscodecontentref_/2):

   ```javascript
   import { Sequelize } from "sequelize";

   const db = new Sequelize("database", "username", "password", {
     host: "localhost",
     dialect: "mysql", // o 'postgres', 'sqlite', etc.
   });

   export default db;
   ```

4. Ejecuta las migraciones (si estás usando Sequelize CLI):
   ```sh
   npx sequelize-cli db:migrate
   ```

## Configuración de Prettier

Este proyecto utiliza Prettier para formatear el código. La configuración de Prettier se encuentra en el archivo [.prettierrc](http://_vscodecontentref_/3).

### [.prettierrc](http://_vscodecontentref_/4)

```json
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 90
}
```

5. Configura la base de datos en `database.js`:

   ```javascript
   import { Sequelize } from "sequelize";

   const db = new Sequelize(
     process.env.DB,
     process.env.DB_USER,
     process.env.DB_PASSWORD,
     {
       host: process.env.DB_HOST,
       dialect: "postgres", // Cambia esto según tu base de datos (mysql, sqlite, etc.)
     }
   );

   export default db;
   ```

6. Ejecuta las migraciones (si estás usando Sequelize CLI):

   ```sh
   npx sequelize-cli db:migrate
   ```

## Configuración de Prettier

Este proyecto utiliza Prettier para formatear el código. La configuración de Prettier se encuentra en el archivo `.prettierrc`.

### `.prettierrc`

````json
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 90
}

## Configuración del Proyecto

### Variables de Entorno

Asegúrate de configurar las variables de entorno necesarias en un archivo `.env` en la raíz del proyecto. Aquí tienes un ejemplo de las variables de entorno necesarias:

```plaintext
NODE_ENV=development
PORT=numberPort

DB=db_name
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=password

JWT_SECRET=tokenSecret
JWT_EXPIRES_IN=78h

### Ejecución del Servidor

Para iniciar el servidor, ejecuta el siguiente comando:

```sh
npm run dev
````
