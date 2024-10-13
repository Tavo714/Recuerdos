import express from 'express';
import { getAllPedidos, getPedidoById, createPedido, updatePedido, deletePedido } from '../controllers/pedidoController.js';

const router = express.Router();

router.get('/', getAllPedidos); // Obtener todos los pedidos
router.get('/:id', getPedidoById); // Obtener un pedido por ID
router.post('/', createPedido); // Crear un nuevo pedido
router.put('/:id', updatePedido); // Actualizar un pedido
router.delete('/:id', deletePedido); // Eliminar un pedido lógicamente

export default router;
