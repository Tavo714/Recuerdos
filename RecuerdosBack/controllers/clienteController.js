import Cliente from '../models/clienteModel.js';

// Obtener todos los clientes
export const getAllClientes = async (req, res) => {
    try {
        const clientes = await Cliente.getAllClientes();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener cliente por ID
export const getClienteById = async (req, res) => {
    const { id } = req.params;
    try {
        const cliente = await Cliente.getClienteById(id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear cliente
export const createCliente = async (req, res) => {
    const { nombre, email, telefono, direccion, estado } = req.body;
    try {
        const newCliente = await Cliente.createCliente(nombre, email, telefono, direccion, estado);
        res.status(201).json({ message: 'Cliente creado con éxito', clienteId: newCliente.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar cliente
export const updateCliente = async (req, res) => {
    const { id } = req.params;
    const { nombre, email, telefono, direccion, estado } = req.body;
    try {
        const updatedCliente = await Cliente.updateCliente(id, nombre, email, telefono, direccion, estado);
        if (!updatedCliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        res.json({ message: 'Cliente actualizado con éxito' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar cliente lógicamente
export const deleteCliente = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedCliente = await Cliente.deleteCliente(id);
        if (!deletedCliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        res.json({ message: 'Cliente eliminado lógicamente con éxito' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
