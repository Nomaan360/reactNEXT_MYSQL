import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host:'localhost',
  user: 'root',
  password: '',
  database: 'cryptominers',
});

export default connection;