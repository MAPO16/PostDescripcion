const express = require('express');
const app = express();
const mysql = require('mysql');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: "localhost",
  user: "servicio2",
  password: "servicio2.123",
  database: "mobasign"
});

connection.connect();


app.post('/rest/descripcion',  (req, res, ) => { 

   //Body
   var Id_Descripcion = req.body;
   var Descripcion = req.body;
   var Id_Articulo = req.body;
   var Estatus = req.body;
   
   //Mensaje para mostrar en consola
   

      //conexion
   connection.query('INSERT INTO Descripcion SET ?', [Id_Descripcion,Descripcion, Id_Articulo,Estatus],
  (error, results) => {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});


app.listen(1288, function () {
 console.log('Node app is running on port 1288');

});