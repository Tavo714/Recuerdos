import db from '../config/database.js';

const DetallePedido = {
  getAllDetallesByPedidoId: async (pedidoId) => {
    const [rows] = await db.query('SELECT * FROM DetallePedido WHERE pedido_id = ? AND estado = "activo"', [pedidoId]);
    return rows;
  },

  createDetallePedido: async (pedidoId, productoId, cantidad, precioUnitario, subtotal) => {
    const result = await db.query(
      'INSERT INTO DetallePedido (pedido_id, producto_id, cantidad, precio_unitario, subtotal, estado) VALUES (?, ?, ?, ?, ?, "activo")',
      [pedidoId, productoId, cantidad, precioUnitario, subtotal]
    );
    return result[0];
  },

  updateDetallePedido: async (detalleId, pedidoId, productoId, cantidad, precioUnitario, subtotal) => {
    const result = await db.query(
      'UPDATE DetallePedido SET pedido_id = ?, producto_id = ?, cantidad = ?, precio_unitario = ?, subtotal = ? WHERE id = ? AND estado = "activo"',
      [pedidoId, productoId, cantidad, precioUnitario, subtotal, detalleId]
    );
    return result[0];
  },

  // Eliminar lógicamente un detalle de pedido
  deleteDetallePedido: async (detalleId) => {
    const result = await db.query('UPDATE DetallePedido SET estado = "eliminado" WHERE id = ?', [detalleId]);
    return result[0];
  }
};

export default DetallePedido;
