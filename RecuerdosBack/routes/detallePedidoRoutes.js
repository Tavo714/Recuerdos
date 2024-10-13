import express from 'express';
import { getAllDetallesByPedidoId, createDetallePedido, updateDetallePedido, deleteDetallePedido } from '../controllers/detallePedidoController.js';

const router = express.Router();

// Ajustar las rutas
router.get('/:pedidoId', getAllDetallesByPedidoId); // Ruta correcta para obtener detalles por pedidoId
router.post('/', createDetallePedido); // Crear detalle de pedido
router.put('/:id', updateDetallePedido); // Actualizar detalle de pedido
router.delete('/:id', deleteDetallePedido); // Eliminación lógica de detalle de pedido

export default router;
