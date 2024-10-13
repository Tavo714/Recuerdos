import db from '../config/database.js';

const Compra = {
  // Obtener todas las compras
  getAllCompras: async () => {
    const [rows] = await db.query('SELECT * FROM compras WHERE estado = "activo"');
    return rows;
  },

  // Obtener compra por ID
  getCompraById: async (id) => {
    const [rows] = await db.query('SELECT * FROM compras WHERE id = ? AND estado = "activo"', [id]);
    return rows[0];
  },

  // Crear una nueva compra
  createCompra: async (proveedorId, materialId, cantidad, precioUnitario) => {
    const result = await db.query(
      'INSERT INTO compras (proveedor_id, material_id, cantidad, precio_unitario, estado) VALUES (?, ?, ?, ?, "activo")',
      [proveedorId, materialId, cantidad, precioUnitario]
    );
    return result[0];
  },

  // Actualizar una compra
  updateCompra: async (id, proveedorId, materialId, cantidad, precioUnitario) => {
    const result = await db.query(
      'UPDATE compras SET proveedor_id = ?, material_id = ?, cantidad = ?, precio_unitario = ? WHERE id = ? AND estado = "activo"',
      [proveedorId, materialId, cantidad, precioUnitario, id]
    );
    return result[0];
  },

  // Eliminar lógicamente una compra
  deleteCompra: async (id) => {
    const result = await db.query('UPDATE compras SET estado = "inactivo" WHERE id = ?', [id]);
    return result[0];
  }
};

export default Compra;
