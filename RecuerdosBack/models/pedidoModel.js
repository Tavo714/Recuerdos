import db from '../config/database.js';

const Pedido = {
  getAllPedidos: async () => {
    const [rows] = await db.query('SELECT * FROM pedidos');
    return rows;
  },

  getPedidoById: async (id) => {
    const [rows] = await db.query('SELECT * FROM pedidos WHERE id = ?', [id]);
    return rows[0];
  },

  createPedido: async (clienteId, fecha, total) => {
    const result = await db.query(
      'INSERT INTO pedidos (cliente_id, fecha_pedido, monto_total, estado) VALUES (?, ?, ?, "pendiente")',
      [clienteId, fecha, total]
    );
    return result[0];
  },

  updatePedido: async (id, clienteId, fecha, total) => {
    const result = await db.query(
      'UPDATE pedidos SET cliente_id = ?, fecha_pedido = ?, monto_total = ? WHERE id = ?',
      [clienteId, fecha, total, id]
    );
    return result[0];
  },

  deletePedido: async (id) => {
    const result = await db.query('UPDATE pedidos SET estado = "cancelado" WHERE id = ?', [id]);
    return result[0];
  }
};

export default Pedido;
