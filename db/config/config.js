const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });
dotenv.config();
module.exports = {
  "development": {
    "username": process.env.NEXT_PUBLIC_DB_USER,
    "password": process.env.NEXT_PUBLIC_DB_PASSWORD,
    "database": process.env.NEXT_PUBLIC_DB_NAME,
    "host": process.env.NEXT_PUBLIC_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.NEXT_PUBLIC_DB_USER,
    "password": process.env.NEXT_PUBLIC_DB_PASSWORD,
    "database": process.env.NEXT_PUBLIC_DB_NAME,
    "host": process.env.NEXT_PUBLIC_HOST,
    "dialect": "postgres"
  }
}
