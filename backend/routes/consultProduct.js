// consultProduct.js
import express from 'express';

export default (productos) => {
    const router = express.Router();
    router.get('/', (req, res) => {
        res.json({ productos });
    });
    return router;
};
