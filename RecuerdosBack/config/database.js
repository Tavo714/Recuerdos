import mysql from 'mysql2';
import dotenv from 'dotenv';

// Inicializar dotenv
dotenv.config();

// Crear el pool de conexiones con promesas
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Exportar el pool con promesas
export default pool.promise();
