const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 7998,
    user: 'root',
    password: 'root',
    database: 'agenda'
})

module.exports = conexao
