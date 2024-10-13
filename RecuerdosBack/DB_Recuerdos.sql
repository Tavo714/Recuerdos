-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS DB_Recuerdos;


-- Usar la base de datos creada
USE DB_Recuerdos;

-- Crear la tabla 'products'
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(255), -- URL para la imagen del producto terminado
    video_url VARCHAR(255), -- URL para un video demostrativo
    delivery_time VARCHAR(50), -- Tiempo estimado de entrega (ej. "7-10 días")
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Crear la tabla 'Clientes'
CREATE TABLE IF NOT EXISTS Clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefono VARCHAR(15),
    direccion VARCHAR(255),
    estado ENUM('activo', 'inactivo') DEFAULT 'activo',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Crear la tabla 'Pedidos'
CREATE TABLE IF NOT EXISTS Pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    fecha_pedido DATETIME DEFAULT CURRENT_TIMESTAMP,
    estado ENUM('pendiente', 'enviado', 'completado', 'cancelado') DEFAULT 'pendiente',
    monto_total DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (cliente_id) REFERENCES Clientes(id)
);

-- Crear la tabla 'DetallePedido'
CREATE TABLE IF NOT EXISTS DetallePedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pedido_id INT,
    producto_id INT,
    cantidad INT,
    precio_unitario DECIMAL(10, 2),
    subtotal DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (pedido_id) REFERENCES Pedidos(id),
    FOREIGN KEY (producto_id) REFERENCES products(id) -- Aquí se hace referencia a 'products'
);

-- Modificar la tabla 'DetallePedido' para incluir 'estado' y habilitar eliminación lógica
ALTER TABLE DetallePedido ADD estado ENUM('activo', 'eliminado') DEFAULT 'activo';


-- Crear la tabla 'Proveedores'
CREATE TABLE IF NOT EXISTS Proveedores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    email VARCHAR(100),
    direccion VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

ALTER TABLE Proveedores ADD COLUMN estado ENUM('activo', 'inactivo') DEFAULT 'activo';


-- Crear la tabla 'Materiales'
CREATE TABLE IF NOT EXISTS Materiales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255),
    stock_actual INT NOT NULL,
    stock_minimo INT NOT NULL,
    unidad_medida VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Modificar la tabla 'Materiales' para incluir la columna 'estado' para habilitar eliminación lógica
ALTER TABLE Materiales ADD estado ENUM('activo', 'inactivo') DEFAULT 'activo';


-- Crear la tabla intermedia para la relación muchos a muchos entre Proveedores y Materiales
CREATE TABLE IF NOT EXISTS ProveedoresMateriales (
    proveedor_id INT,
    material_id INT,
    precio_actual DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (proveedor_id, material_id),
    FOREIGN KEY (proveedor_id) REFERENCES Proveedores(id) ON DELETE CASCADE,
    FOREIGN KEY (material_id) REFERENCES Materiales(id) ON DELETE CASCADE
);

-- Crear la tabla de Historial de Precios para registrar los cambios en los precios de los materiales por proveedor
CREATE TABLE IF NOT EXISTS HistorialPrecios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    proveedor_id INT,
    material_id INT,
    precio DECIMAL(10, 2) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (proveedor_id) REFERENCES Proveedores(id) ON DELETE CASCADE,
    FOREIGN KEY (material_id) REFERENCES Materiales(id) ON DELETE CASCADE
);

-- Crear la tabla 'Compras'
CREATE TABLE IF NOT EXISTS Compras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    proveedor_id INT,
    material_id INT,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10, 2) NOT NULL,
    total DECIMAL(10, 2) GENERATED ALWAYS AS (cantidad * precio_unitario) STORED, -- Cálculo automático del total
    fecha_compra TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (proveedor_id) REFERENCES Proveedores(id) ON DELETE CASCADE,
    FOREIGN KEY (material_id) REFERENCES Materiales(id) ON DELETE CASCADE
);

-- Modificar la tabla 'compras' para incluir 'estado' y habilitar eliminación lógica
ALTER TABLE compras ADD estado ENUM('activo', 'inactivo') DEFAULT 'activo';


