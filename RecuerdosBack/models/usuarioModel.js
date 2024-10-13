import db from '../config/database.js';

const Usuario = {
  getAllUsuarios: async () => {
    const [rows] = await db.query('SELECT * FROM usuarios WHERE estado = "activo"');
    return rows;
  },

  getUsuarioById: async (id) => {
    const [rows] = await db.query('SELECT * FROM usuarios WHERE id = ? AND estado = "activo"', [id]);
    return rows[0];
  },

  createUsuario: async (nombre, email, password) => {
    const result = await db.query(
      'INSERT INTO usuarios (nombre, email, password, estado) VALUES (?, ?, ?, "activo")',
      [nombre, email, password]
    );
    return result[0];
  },

  updateUsuario: async (id, nombre, email, password) => {
    const result = await db.query(
      'UPDATE usuarios SET nombre = ?, email = ?, password = ? WHERE id = ? AND estado = "activo"',
      [nombre, email, password, id]
    );
    return result[0];
  },

  deleteUsuario: async (id) => {
    const result = await db.query('UPDATE usuarios SET estado = "inactivo" WHERE id = ?', [id]);
    return result[0];
  }
};

export default Usuario;
