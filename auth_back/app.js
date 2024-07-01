const express = require("express");
const dbconnect = require("./config");
const ModelUser = require("./model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const app = express();

const router = express.Router();

// Middleware para procesar JSON
app.use(express.json());

// Registro de usuario
router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).send({ error: 'El nombre de usuario y la contraseña son obligatorios' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await ModelUser.create({ username, password: hashedPassword });
        res.status(201).send(user);
    } catch (error) {
        console.error('Error en el registro:', error);
        res.status(500).send({ error: 'Error en el servidor', details: error.message });
    }
});

// Inicio de sesión
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).send({ error: 'El nombre de usuario y la contraseña son obligatorios' });
        }
        const user = await ModelUser.findOne({ username });
        if (!user) {
            return res.status(404).send({ error: 'Usuario no encontrado' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send({ error: 'Contraseña incorrecta' });
        }
        const token = jwt.sign({ userId: user._id }, 'test_secret_key', { expiresIn: '1h' });
        res.send({ message: 'Autenticación satisfactoria', token });
    } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        res.status(500).send({ error: 'Error en el servidor', details: error.message });
    }
});

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

