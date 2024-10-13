import Product from '../models/productModel.js';

// Obtener todos los productos
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener producto por ID
export const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.getProductById(id);
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear un producto
export const createProduct = async (req, res) => {
    const { name, description, price, image_url, video_url, delivery_time } = req.body;
    try {
        const newProduct = await Product.createProduct(name, description, price, image_url, video_url, delivery_time);
        res.status(201).json({ message: 'Producto creado con éxito', productId: newProduct.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un producto
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, image_url, video_url, delivery_time } = req.body;
    try {
        const updatedProduct = await Product.updateProduct(id, name, description, price, image_url, video_url, delivery_time);
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json({ message: 'Producto actualizado con éxito' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un producto lógicamente
export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await Product.deleteProduct(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json({ message: 'Producto eliminado lógicamente con éxito' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
