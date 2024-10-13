import express from 'express';
import { getAllCompras, getCompraById, createCompra, updateCompra, deleteCompra } from '../controllers/compraController.js';

const router = express.Router();

// Rutas CRUD para compras
router.get('/', getAllCompras); // Obtener todas las compras
router.get('/:id', getCompraById); // Obtener una compra por ID
router.post('/', createCompra); // Crear una nueva compra
router.put('/:id', updateCompra); // Actualizar una compra existente
router.delete('/:id', deleteCompra); // Eliminar lógicamente una compra

export default router;
