import db from '../config/database.js';

const Cliente = {
  getAllClientes: async () => {
    const [rows] = await db.query('SELECT * FROM clientes WHERE estado = "activo"');
    return rows;
  },

  getClienteById: async (id) => {
    const [rows] = await db.query('SELECT * FROM clientes WHERE id = ? AND estado = "activo"', [id]);
    return rows[0];
  },

  createCliente: async (nombre, email, telefono, direccion) => {
    const result = await db.query(
      'INSERT INTO clientes (nombre, email, telefono, direccion, estado) VALUES (?, ?, ?, ?, "activo")',
      [nombre, email, telefono, direccion]
    );
    return result[0];
  },

  updateCliente: async (id, nombre, email, telefono, direccion) => {
    const result = await db.query(
      'UPDATE clientes SET nombre = ?, email = ?, telefono = ?, direccion = ? WHERE id = ? AND estado = "activo"',
      [nombre, email, telefono, direccion, id]
    );
    return result[0];
  },

  deleteCliente: async (id) => {
    const result = await db.query('UPDATE clientes SET estado = "inactivo" WHERE id = ?', [id]);
    return result[0];
  }
};

export default Cliente;
