import express from 'express';

export default (productos) => {
    const router = express.Router();

    router.post('/', (req, res) => {
        const { ID } = req.body;
        const index = productos.findIndex(p => p.id == ID);
        if (index === -1) return res.json({ message: 'Producto no encontrado.' });
        productos.splice(index, 1);
        res.json({ message: 'Producto eliminado correctamente.' });
    });

    return router;
};
