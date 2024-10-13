import DetallePedido from '../models/detallePedidoModel.js';

// Obtener todos los detalles de un pedido
export const getAllDetallesByPedidoId = async (req, res) => {
  const { pedidoId } = req.params;
  try {
    const detalles = await DetallePedido.getAllDetallesByPedidoId(pedidoId);
    if (!detalles || detalles.length === 0) {
      return res.status(404).json({ message: 'Detalles no encontrados para el pedido especificado' });
    }
    res.json(detalles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un detalle de pedido
export const createDetallePedido = async (req, res) => {
  const { pedidoId, productoId, cantidad, precioUnitario } = req.body;
  try {
    const subtotal = cantidad * precioUnitario; // Calcular el subtotal
    const nuevoDetalle = await DetallePedido.createDetallePedido(pedidoId, productoId, cantidad, precioUnitario, subtotal);
    res.status(201).json({ message: 'Detalle de pedido creado con éxito', detalleId: nuevoDetalle.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un detalle de pedido
export const updateDetallePedido = async (req, res) => {
  const { id } = req.params;
  const { pedidoId, productoId, cantidad, precioUnitario } = req.body;
  try {
    const subtotal = cantidad * precioUnitario; // Calcular el nuevo subtotal
    const detalleActualizado = await DetallePedido.updateDetallePedido(id, pedidoId, productoId, cantidad, precioUnitario, subtotal);
    if (!detalleActualizado) {
      return res.status(404).json({ message: 'Detalle de pedido no encontrado' });
    }
    res.json({ message: 'Detalle de pedido actualizado con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminación lógica de un detalle de pedido
export const deleteDetallePedido = async (req, res) => {
  const { id } = req.params;
  try {
    const detalleEliminado = await DetallePedido.deleteDetallePedido(id);
    if (!detalleEliminado) {
      return res.status(404).json({ message: 'Detalle de pedido no encontrado' });
    }
    res.json({ message: 'Detalle de pedido eliminado lógicamente con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
