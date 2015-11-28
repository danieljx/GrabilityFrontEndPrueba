/*
 * Module dependencies
 */

import express from 'express';
import http from 'http';
import dbapi from './db-api';

const port = 8000;
const app = express();

// Configurar la ruta de archivos estáticos
app.use('/', express.static(__dirname + '/public'));

app.get('/notices', (req, res) => {
  dbapi.notices.find((notices) => {
    res.json(notices);
  })
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

let server = http.createServer(app).listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});
