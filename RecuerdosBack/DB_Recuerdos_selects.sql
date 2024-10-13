USE DB_Recuerdos;

select * from products
select * from clientes
select * from pedidos
select * from detallepedido
select * from proveedores
select * from materiales
select * from compras
-- select * from proveedoresmateriales
-- select * from historialprecios

SELECT 
    p.nombre AS proveedor, 
    m.nombre AS material, 
    pm.precio_actual 
FROM ProveedoresMateriales pm
JOIN Proveedores p ON pm.proveedor_id = p.id
JOIN Materiales m ON pm.material_id = m.id;

