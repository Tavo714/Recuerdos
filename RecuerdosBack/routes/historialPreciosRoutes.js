import express from 'express';
import { getHistorialPreciosByMaterial, addHistorialPrecio } from '../controllers/historialPreciosController.js';

const router = express.Router();

router.get('/:material_id', getHistorialPreciosByMaterial);
router.post('/', addHistorialPrecio);

export default router;
