var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'grubhub.crefe1lscoa0.us-west-2.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: '12345678',
    database: 'grubhub'
})
// var pool = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'grubhub'
// })
pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
    if (connection) connection.release()
    return
})
module.exports = pool
