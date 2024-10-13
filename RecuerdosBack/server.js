import express from 'express';
import cors from 'cors';
import proveedorRoutes from './routes/proveedorRoutes.js';
import materialRoutes from './routes/materialRoutes.js';
import historialPreciosRoutes from './routes/historialPreciosRoutes.js';
import productRoutes from './routes/productRoutes.js';
import clienteRoutes from './routes/clienteRoutes.js';
import pedidoRoutes from './routes/pedidoRoutes.js';
import detallePedidoRoutes from './routes/detallePedidoRoutes.js';
import compraRoutes from './routes/compraRoutes.js'; // Importar rutas de compras
import usuarioRoutes from './routes/usuarioRoutes.js'; // Nueva ruta de usuarios
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/proveedores', proveedorRoutes);
app.use('/api/materiales', materialRoutes);
app.use('/api/historialPrecios', historialPreciosRoutes);
app.use('/api/products', productRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/pedidos', pedidoRoutes);
app.use('/api/detalles', detallePedidoRoutes);
app.use('/api/compras', compraRoutes); // Asegúrate de que esta ruta esté definida correctamente
app.use('/api/usuarios', usuarioRoutes);

// Configuración del puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
