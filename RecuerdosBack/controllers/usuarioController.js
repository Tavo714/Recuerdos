import Usuario from '../models/usuarioModel.js';

// Obtener todos los usuarios
export const getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.getAllUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener usuario por ID
export const getUsuarioById = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.getUsuarioById(id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear usuario
export const createUsuario = async (req, res) => {
  const { nombre, email, password } = req.body;
  try {
    const nuevoUsuario = await Usuario.createUsuario(nombre, email, password);
    res.status(201).json({ message: 'Usuario creado con éxito', usuarioId: nuevoUsuario.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar usuario
export const updateUsuario = async (req, res) => {
  const { id } = req.params;
  const { nombre, email, password } = req.body;
  try {
    const usuarioActualizado = await Usuario.updateUsuario(id, nombre, email, password);
    if (!usuarioActualizado) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json({ message: 'Usuario actualizado con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar usuario lógicamente
export const deleteUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const usuarioEliminado = await Usuario.deleteUsuario(id);
    if (!usuarioEliminado) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json({ message: 'Usuario eliminado lógicamente con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
