import db from '../config/database.js';

const HistorialPrecios = {
  getAllPrecios: async () => {
    const [rows] = await db.query('SELECT * FROM historial_precios');
    return rows;
  },

  getPreciosByMaterialId: async (materialId) => {
    const [rows] = await db.query('SELECT * FROM historial_precios WHERE material_id = ?', [materialId]);
    return rows;
  },

  createHistorialPrecio: async (materialId, proveedorId, precio, fecha) => {
    const result = await db.query(
      'INSERT INTO historial_precios (material_id, proveedor_id, precio, fecha) VALUES (?, ?, ?, ?)',
      [materialId, proveedorId, precio, fecha]
    );
    return result[0];
  }
};

export default HistorialPrecios;
