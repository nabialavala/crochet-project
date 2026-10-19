const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'crochet_tracker'
});

connection.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.message);
    } else {
        console.log('Successfully connected to crochet_tracker!');
    }

    connection.end();
});
