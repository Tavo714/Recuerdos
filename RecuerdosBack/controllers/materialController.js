import Material from '../models/materialModel.js';

// Obtener todos los materiales
export const getAllMaterials = async (req, res) => {
  try {
    const materials = await Material.getAllMaterials();
    res.json(materials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener material por ID
export const getMaterialById = async (req, res) => {
  const { id } = req.params;
  try {
    const material = await Material.getMaterialById(id);
    if (!material) {
      return res.status(404).json({ message: 'Material no encontrado' });
    }
    res.json(material);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un material
export const createMaterial = async (req, res) => {
  const { nombre, descripcion, stockActual, stockMinimo, unidadMedida } = req.body;
  try {
    const nuevoMaterial = await Material.createMaterial(nombre, descripcion, stockActual, stockMinimo, unidadMedida);
    res.status(201).json({ message: 'Material creado con éxito', materialId: nuevoMaterial.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un material
export const updateMaterial = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, stockActual, stockMinimo, unidadMedida } = req.body;
  try {
    const materialActualizado = await Material.updateMaterial(id, nombre, descripcion, stockActual, stockMinimo, unidadMedida);
    if (!materialActualizado) {
      return res.status(404).json({ message: 'Material no encontrado' });
    }
    res.json({ message: 'Material actualizado con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un material lógicamente
export const deleteMaterial = async (req, res) => {
  const { id } = req.params;
  try {
    const materialEliminado = await Material.deleteMaterial(id);
    if (!materialEliminado) {
      return res.status(404).json({ message: 'Material no encontrado' });
    }
    res.json({ message: 'Material eliminado lógicamente con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
