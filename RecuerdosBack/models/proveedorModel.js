import db from '../config/database.js';

const Proveedor = {
  getAllProveedores: async () => {
    const [rows] = await db.query('SELECT * FROM Proveedores WHERE estado = "activo"');
    return rows;
  },

  getProveedorById: async (id) => {
    const [rows] = await db.query('SELECT * FROM Proveedores WHERE id = ? AND estado = "activo"', [id]);
    return rows[0];
  },

  createProveedor: async (nombre, telefono, email, direccion) => {
    const result = await db.query(
      'INSERT INTO Proveedores (nombre, telefono, email, direccion, estado) VALUES (?, ?, ?, ?, "activo")',
      [nombre, telefono, email, direccion]
    );
    return result[0];
  },

  updateProveedor: async (id, nombre, telefono, email, direccion) => {
    const result = await db.query(
      'UPDATE Proveedores SET nombre = ?, telefono = ?, email = ?, direccion = ? WHERE id = ? AND estado = "activo"',
      [nombre, telefono, email, direccion, id]
    );
    return result[0];
  },

  deleteProveedor: async (id) => {
    const result = await db.query('UPDATE Proveedores SET estado = "inactivo" WHERE id = ?', [id]);
    return result[0];
  }
};

export default Proveedor;
