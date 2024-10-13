import express from 'express';
import { getAllClientes, getClienteById, createCliente, updateCliente, deleteCliente } from '../controllers/clienteController.js';

const router = express.Router();

// Definir rutas
router.get('/', getAllClientes); // Obtener todos los clientes
router.get('/:id', getClienteById); // Obtener cliente por ID
router.post('/', createCliente); // Crear nuevo cliente
router.put('/:id', updateCliente); // Actualizar cliente
router.delete('/:id', deleteCliente); // Eliminación lógica de cliente

export default router;
