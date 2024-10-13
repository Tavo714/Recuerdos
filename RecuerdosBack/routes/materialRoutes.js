import express from 'express';
import { getAllMaterials, getMaterialById, createMaterial, updateMaterial, deleteMaterial } from '../controllers/materialController.js';

const router = express.Router();

// Rutas correctas
router.get('/', getAllMaterials); // Obtener todos los materiales
router.get('/:id', getMaterialById); // Obtener material por ID
router.post('/', createMaterial); // Crear nuevo material
router.put('/:id', updateMaterial); // Actualizar material
router.delete('/:id', deleteMaterial); // Eliminación lógica de material

export default router;
