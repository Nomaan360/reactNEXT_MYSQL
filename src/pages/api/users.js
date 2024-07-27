// pages/api/users.js
// import connection from '../../pages/db';
import mysql from 'mysql2/promise';

export default async function handler(req, res) {
    const connection = await mysql.createConnection({
        host:'localhost',
        user: 'root',
        password: '',
        database: 'cryptominers',
      });
  try {
    const [rows] = await connection.execute('SELECT * FROM payout_history');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
