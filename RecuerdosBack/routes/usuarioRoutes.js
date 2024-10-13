import express from 'express';
import { getAllUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario } from '../controllers/usuarioController.js';

const router = express.Router();

// Definir rutas
router.get('/', getAllUsuarios); // Obtener todos los usuarios
router.get('/:id', getUsuarioById); // Obtener usuario por ID
router.post('/', createUsuario); // Crear nuevo usuario
router.put('/:id', updateUsuario); // Actualizar usuario
router.delete('/:id', deleteUsuario); // Eliminación lógica de usuario

export default router;
