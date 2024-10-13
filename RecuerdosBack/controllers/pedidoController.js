import Pedido from '../models/pedidoModel.js';

// Obtener todos los pedidos
export const getAllPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.getAllPedidos();
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener pedido por ID
export const getPedidoById = async (req, res) => {
  const { id } = req.params;
  try {
    const pedido = await Pedido.getPedidoById(id);
    if (!pedido) {
      return res.status(404).json({ message: 'Pedido no encontrado' });
    }
    res.json(pedido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un pedido
export const createPedido = async (req, res) => {
  const { clienteId, fecha, total } = req.body;
  try {
    const nuevoPedido = await Pedido.createPedido(clienteId, fecha, total);
    res.status(201).json({ message: 'Pedido creado con éxito', pedidoId: nuevoPedido.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un pedido
export const updatePedido = async (req, res) => {
  const { id } = req.params;
  const { clienteId, fecha, total } = req.body;
  try {
    const pedidoActualizado = await Pedido.updatePedido(id, clienteId, fecha, total);
    if (!pedidoActualizado) {
      return res.status(404).json({ message: 'Pedido no encontrado' });
    }
    res.json({ message: 'Pedido actualizado con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un pedido lógicamente
export const deletePedido = async (req, res) => {
  const { id } = req.params;
  try {
    const pedidoEliminado = await Pedido.deletePedido(id);
    if (!pedidoEliminado) {
      return res.status(404).json({ message: 'Pedido no encontrado' });
    }
    res.json({ message: 'Pedido eliminado lógicamente con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
