-- Inserciones en la tabla 'Clientes'
INSERT INTO Clientes (nombre, email, telefono, direccion, estado) VALUES
('Juan Pérez', 'juan.perez@example.com', '123456789', 'Calle Falsa 123, Lima', 'activo'),
('María García', 'maria.garcia@example.com', '987654321', 'Av. Siempre Viva 456, Piura', 'activo');

-- Inserciones en la tabla 'Products'
INSERT INTO products (name, description, price, image_url, video_url, delivery_time, status) VALUES
('Recuerdo de Mármol', 'Una placa de mármol con un código QR incrustado', 99.99, 'https://example.com/image1.jpg', 'https://example.com/video1.mp4', '7-10 días', 'active'),
('Recuerdo de Vidrio', 'Un marco de vidrio con un QR personalizado', 79.99, 'https://example.com/image2.jpg', 'https://example.com/video2.mp4', '10-14 días', 'active');

-- Inserciones en la tabla 'Pedidos'
INSERT INTO Pedidos (cliente_id, estado, monto_total) VALUES
(1, 'pendiente', 199.98),
(2, 'enviado', 79.99);

-- Inserciones en la tabla 'DetallePedido'
INSERT INTO DetallePedido (pedido_id, producto_id, cantidad, precio_unitario, subtotal) VALUES
(1, 1, 1, 99.99, 99.99),
(1, 2, 1, 99.99, 99.99),
(2, 2, 1, 79.99, 79.99);

-- Inserciones en la tabla 'Proveedores'
INSERT INTO Proveedores (nombre, telefono, email, direccion) VALUES
('Proveedor Mármol S.A.', '998877665', 'contacto@marmolsa.com', 'Calle Comercio 123, Lima'),
('Proveedor Vidrio S.A.', '998877556', 'ventas@vidriosa.com', 'Av. Transparencia 789, Arequipa');

-- Inserciones en la tabla 'Materiales'
INSERT INTO Materiales (nombre, descripcion, stock_actual, stock_minimo, unidad_medida) VALUES
('Mármol', 'Placas de mármol blanco', 50, 10, 'unidades'),
('Vidrio', 'Paneles de vidrio transparente', 100, 20, 'unidades');

-- Inserciones en la tabla intermedia 'ProveedoresMateriales'
INSERT INTO ProveedoresMateriales (proveedor_id, material_id, precio_actual) VALUES
(1, 1, 50.00), -- Mármol de Proveedor Mármol S.A.
(2, 2, 30.00); -- Vidrio de Proveedor Vidrio S.A.

-- Inserciones en la tabla 'HistorialPrecios'
INSERT INTO HistorialPrecios (proveedor_id, material_id, precio) VALUES
(1, 1, 50.00), -- Mármol de Proveedor Mármol S.A.
(2, 2, 30.00); -- Vidrio de Proveedor Vidrio S.A.

-- -----------------------------------------------------

-- Insertar un proveedor
INSERT INTO Proveedores (nombre, telefono, email, direccion) 
VALUES ('Proveedor A', '123456789', 'proveedorA@example.com', 'Calle 123');

-- Insertar un material
INSERT INTO Materiales (nombre, descripcion, stock_actual, stock_minimo, unidad_medida) 
VALUES ('Material A', 'Material de prueba', 500, 50, 'unidades');

-- Insertar una compra
INSERT INTO Compras (proveedor_id, material_id, cantidad, precio_unitario)
VALUES (1, 1, 100, 5.99);

-- Insertar otra compra
INSERT INTO Compras (proveedor_id, material_id, cantidad, precio_unitario)
VALUES (1, 1, 200, 6.50);
