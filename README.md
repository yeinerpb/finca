# Finca Project

Este proyecto es una aplicación Node.js para gestionar las finansas en una finca productora de café. Utiliza Express.js para manejar las rutas y Sequelize como ORM para interactuar con la base de datos.

## Requisitos

- Node.js (v14 o superior)
- npm (v6 o superior)
- Base de datos compatible con Sequelize (por ejemplo, MySQL, PostgreSQL, SQLite)

## Instalación

1. Clona el repositorio:

   ```sh
   git clone https://github.com/tu-usuario/finca.git
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
