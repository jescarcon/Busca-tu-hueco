import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function Reservations() {
    //#region Variables
    const [reservations, setReservations] = useState([]);
    
    const [error, setError] = useState(null);
    const [loading,setLoading]= useState(true);

    //#endregion

    //#region Logic
    useEffect(() => {

        const getReservations = async () => {
            try {
                const res = await axios.get("http://localhost:3000/reservations");
                setReservations(res.data);
            } catch (e) {
                setError(e.message);
            }finally{
                setLoading(false);
            }

        };

        getReservations();
    }, []);

    //#endregion

    return (
        <div className='reservations-container'>
            <h2>Reservas</h2>
            <table>
                <tr>
                    <th>PropertyID</th>
                    <th>Platform</th>
                    <th>Check In</th>
                </tr>

                {reservations.map((r)=>(
                    <tr>
                        <td>{r.propertyId}</td>
                        <td>{r.platform}</td>
                        <td>{r.checkIn}</td>
                    </tr>
                ))}
            </table>

            <div>Error: {error} </div>
        </div>
    )
}
