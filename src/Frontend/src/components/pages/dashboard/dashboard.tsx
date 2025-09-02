//#region Imports
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {BASE_API_URL} from '../../../constants';
//#endregion

export default function Dashboard() {
  //#region Variables

  const navigate = useNavigate();
  const [reservations, setReservations] = useState([]); 

  //#endregion

  //#region Logic

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const res = await fetch(`${BASE_API_URL}/reservations`);
        if (!res.ok) throw new Error('Error al obtener reservas');
        const data = await res.json();
        setReservations(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReservations();
  }, []);

  //#endregion

  return (
    <div>
      <div>
        <h1>Panel de Reservas</h1>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Propiedad</th>
              <th>Plataforma</th>
              <th>ID Plataforma</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Huéspedes</th>
              <th>Precio Total</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reserva) => (
              <tr key={reserva.id}>
                <td>{reserva.id}</td>
                <td>{reserva.propertyId}</td>
                <td>{reserva.platform}</td>
                <td>{reserva.platformReservationId}</td>
                <td>{new Date(reserva.checkIn).toLocaleDateString()}</td>
                <td>{new Date(reserva.checkOut).toLocaleDateString()}</td>
                <td>{reserva.guestsCount}</td>
                <td>€{reserva.totalPrice.toFixed(2)}</td>
                <td>{reserva.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
