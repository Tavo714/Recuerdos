import Compra from '../models/compraModel.js';

// Obtener todas las compras
export const getAllCompras = async (req, res) => {
  try {
    const compras = await Compra.getAllCompras();
    res.json(compras);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener compra por ID
export const getCompraById = async (req, res) => {
  const { id } = req.params;
  try {
    const compra = await Compra.getCompraById(id);
    if (!compra) {
      return res.status(404).json({ message: 'Compra no encontrada' });
    }
    res.json(compra);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear una compra
export const createCompra = async (req, res) => {
  const { proveedorId, materialId, cantidad, precioUnitario } = req.body;
  try {
    const nuevaCompra = await Compra.createCompra(proveedorId, materialId, cantidad, precioUnitario);
    res.status(201).json({ message: 'Compra creada con éxito', compraId: nuevaCompra.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una compra
export const updateCompra = async (req, res) => {
  const { id } = req.params;
  const { proveedorId, materialId, cantidad, precioUnitario } = req.body;
  try {
    const compraActualizada = await Compra.updateCompra(id, proveedorId, materialId, cantidad, precioUnitario);
    if (!compraActualizada) {
      return res.status(404).json({ message: 'Compra no encontrada' });
    }
    res.json({ message: 'Compra actualizada con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar una compra lógicamente
export const deleteCompra = async (req, res) => {
  const { id } = req.params;
  try {
    const compraEliminada = await Compra.deleteCompra(id);
    if (!compraEliminada) {
      return res.status(404).json({ message: 'Compra no encontrada' });
    }
    res.json({ message: 'Compra eliminada con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
