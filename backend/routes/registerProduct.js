import express from 'express';

export default (productos) => {
    const router = express.Router();

    router.post('/', (req, res) => {
        const { nombre, precio, cantidad } = req.body;
        if (!nombre || !precio || !cantidad) {
            return res.json({ message: 'Complete todos los campos.' });
        }
        const id = productos.length + 1;
        productos.push({ id, nombre, precio, cantidad });
        res.json({ message: 'Producto registrado correctamente.' });
    });

    return router;
};
