import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

function Pedidos() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/pedidos`)
      .then(response => setPedidos(response.data))
      .catch(error => console.error('Error fetching pedidos:', error));
  }, []);

  return (
    <div>
        <Navbar />
      <h1>Pedidos</h1>
      <ul>
        {pedidos.map(pedido => (
          <li key={pedido.id}>Pedido {pedido.id} - Total: ${pedido.monto_total}</li>
        ))}
      </ul>
    </div>
  );
}

export default Pedidos;
