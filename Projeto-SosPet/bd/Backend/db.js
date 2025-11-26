const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
 if (err) {
      console.error('Erro de conexão com o banco:', err.message);
      setTimeout(connectDB, 3000); // tenta reconectar em 3 segundos
    } else {
      console.log('Conectado ao banco de dados!');
    }
});

module.exports = db;