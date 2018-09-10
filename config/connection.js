var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host: "localhost",
        port: 8889,
        user: "root",
        password: "root",
        database: "burgers_db"
    });
}
connection.connect(function (err) {
    if (err) {
        console.log(" error connecting: " + err.stack);
        return;
    }
    console.log("Connection as id: " + connection.threadId);
});

module.exports = connection;