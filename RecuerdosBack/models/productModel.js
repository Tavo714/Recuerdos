import db from '../config/database.js';

const Product = {
  getAllProducts: async () => {
    // Solo devuelve productos activos (no eliminados lógicamente)
    const [rows] = await db.query('SELECT * FROM products WHERE status = "active"');
    return rows;
  },

  createProduct: async (name, description, price, image_url, video_url, delivery_time) => {
    // Inserta un nuevo producto con los campos proporcionados y lo marca como activo
    const result = await db.query(
      'INSERT INTO products (name, description, price, image_url, video_url, delivery_time, status) VALUES (?, ?, ?, ?, ?, ?, "active")', 
      [name, description, price, image_url, video_url, delivery_time]
    );
    return result[0];
  },

  updateProduct: async (id, name, description, price, image_url, video_url, delivery_time) => {
    // Actualiza el producto específico si está activo
    const result = await db.query(
      'UPDATE products SET name = ?, description = ?, price = ?, image_url = ?, video_url = ?, delivery_time = ? WHERE id = ? AND status = "active"',
      [name, description, price, image_url, video_url, delivery_time, id]
    );
    return result[0];
  },

  deleteProduct: async (id) => {
    // Eliminación lógica del producto, marcándolo como inactivo
    const result = await db.query('UPDATE products SET status = "inactive" WHERE id = ?', [id]);
    return result[0];
  },

  getProductById: async (id) => {
    // Devuelve el producto específico si está activo
    const [rows] = await db.query('SELECT * FROM products WHERE id = ? AND status = "active"', [id]);
    return rows[0];
  }
};

export default Product;
