import db from '../config/database.js';

// Obtener el historial de precios de un material por proveedor
export const getHistorialPreciosByMaterial = async (req, res) => {
    const { material_id } = req.params;
    try {
        const [historial] = await db.query('SELECT * FROM HistorialPrecios WHERE material_id = ?', [material_id]);
        res.json(historial);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Agregar un nuevo registro de precio al historial
export const addHistorialPrecio = async (req, res) => {
    const { proveedor_id, material_id, precio } = req.body;
    try {
        const result = await db.query('INSERT INTO HistorialPrecios (proveedor_id, material_id, precio) VALUES (?, ?, ?)', 
        [proveedor_id, material_id, precio]);
        res.status(201).json({ message: 'Precio registrado con éxito', id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
