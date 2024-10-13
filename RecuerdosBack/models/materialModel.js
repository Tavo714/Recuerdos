import db from '../config/database.js';

const Material = {
  getAllMaterials: async () => {
    const [rows] = await db.query('SELECT * FROM Materiales WHERE estado = "activo"');
    return rows;
  },

  getMaterialById: async (id) => {
    const [rows] = await db.query('SELECT * FROM Materiales WHERE id = ? AND estado = "activo"', [id]);
    return rows[0];
  },

  createMaterial: async (nombre, descripcion, stock_actual, stock_minimo, unidad_medida) => {
    const result = await db.query(
      'INSERT INTO Materiales (nombre, descripcion, stock_actual, stock_minimo, unidad_medida, estado) VALUES (?, ?, ?, ?, ?, "activo")',
      [nombre, descripcion, stock_actual, stock_minimo, unidad_medida]
    );
    return result[0];
  },

  updateMaterial: async (id, nombre, descripcion, stock_actual, stock_minimo, unidad_medida) => {
    const result = await db.query(
      'UPDATE Materiales SET nombre = ?, descripcion = ?, stock_actual = ?, stock_minimo = ?, unidad_medida = ? WHERE id = ? AND estado = "activo"',
      [nombre, descripcion, stock_actual, stock_minimo, unidad_medida, id]
    );
    return result[0];
  },

  deleteMaterial: async (id) => {
    const result = await db.query('UPDATE Materiales SET estado = "inactivo" WHERE id = ?', [id]);
    return result[0];
  }
  
};

export default Material;
