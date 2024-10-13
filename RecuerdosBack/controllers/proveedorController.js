import Proveedor from '../models/proveedorModel.js';

// Obtener todos los proveedores
export const getAllProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedor.getAllProveedores();
    res.json(proveedores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener proveedor por ID
export const getProveedorById = async (req, res) => {
  const { id } = req.params;
  try {
    const proveedor = await Proveedor.getProveedorById(id);
    if (!proveedor) {
      return res.status(404).json({ message: 'Proveedor no encontrado' });
    }
    res.json(proveedor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear proveedor
export const createProveedor = async (req, res) => {
  const { nombre, telefono, email, direccion } = req.body;
  try {
    const nuevoProveedor = await Proveedor.createProveedor(nombre, telefono, email, direccion);
    res.status(201).json({ message: 'Proveedor creado con éxito', proveedorId: nuevoProveedor.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar proveedor
export const updateProveedor = async (req, res) => {
  const { id } = req.params;
  const { nombre, telefono, email, direccion } = req.body;
  try {
    const proveedorActualizado = await Proveedor.updateProveedor(id, nombre, telefono, email, direccion);
    if (!proveedorActualizado) {
      return res.status(404).json({ message: 'Proveedor no encontrado' });
    }
    res.json({ message: 'Proveedor actualizado con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar proveedor lógicamente
export const deleteProveedor = async (req, res) => {
  const { id } = req.params;
  try {
    const proveedorEliminado = await Proveedor.deleteProveedor(id);
    if (!proveedorEliminado) {
      return res.status(404).json({ message: 'Proveedor no encontrado' });
    }
    res.json({ message: 'Proveedor eliminado lógicamente con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
