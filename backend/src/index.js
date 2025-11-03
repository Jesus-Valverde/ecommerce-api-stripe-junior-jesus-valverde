// Dependencias
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas de ejemplo
app.get('/', (req, res) => {
    res.send({ message: 'Servidor Express funcionando 🔥' });
});

// Rutas internas
// Aquí luego agregaremos routes como /internal/products, /internal/checkout, etc.

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});