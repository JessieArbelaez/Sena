const express = require("express");
const dbconnect = require("./config");
const ModelUser = require("./model");
const cors = require("cors");
const app = express();

const router = express.Router();

// Habilitar CORS para todas las solicitudes
app.use(cors());

// Middleware para procesar JSON
app.use(express.json());

// Otros endpoints CRUD
// Crear
router.post('/usuarios', async (req, res) => {
    try {
        const body = req.body;
        const respuesta = await ModelUser.create(body);
        res.send(respuesta);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Consultar
router.get('/usuarios', async (req, res) => {
    try {
        const respuesta = await ModelUser.find({});
        res.send(respuesta);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Consultar por Id
router.get('/usuarios/:id', async (req, res) => {
    try {
        const respuesta = await ModelUser.findById(req.params.id);
        res.send(respuesta);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Actualizar
router.put('/usuarios/:id', async (req, res) => {
    try {
        const respuesta = await ModelUser.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(respuesta);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Eliminar
router.delete('/usuarios/:id', async (req, res) => {
    try {
        await ModelUser.findByIdAndDelete(req.params.id);
        res.send({ message: 'Usuario eliminado' });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

app.use(router);

app.listen(8000, () => {
    console.log("El servidor está en el puerto 8000");
});

dbconnect();

