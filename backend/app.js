import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import registerProduct from './routes/registerProduct.js';
import consultProduct from './routes/consultProduct.js'; // <- aquí el nombre
import deleteProduct from './routes/deleteProduct.js';

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Base de datos temporal
let productos = [];

// Rutas
app.use('/registrarProducto', registerProduct(productos));
app.use('/consultProduct', consultProduct(productos)); // <- debe coincidir con el import
app.use('/deleteProduct', deleteProduct(productos));

// Iniciar servidor
app.listen(port, () => console.log(`Servidor escuchando en http://localhost:${port}`));
