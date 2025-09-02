//#region Imports
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_API_URL } from '../../../constants';
//#endregion

export default function Dashboard() {
  //#region Variables
  const navigate = useNavigate();

  const CCAA = {
    and: "Andalucía",
    arn: "Aragón",
    ast: "Asturias",
    bal: "Illes Balears",
    coo: "Canarias",
    can: "Cantabria",
    cle: "Castilla y León",
    clm: "Castilla - La Mancha",
    cat: "Cataluña",
    val: "Comunitat Valenciana",
    ext: "Extremadura",
    gal: "Galicia",
    mad: "Madrid",
    mur: "Murcia",
    nav: "Navarra",
    pva: "País Vasco",
    rio: "La Rioja",
  };

  const [ccaa, setCcaa] = useState("mad");
  const [data, setData] = useState<any>(null);
  //#endregion

  //#region Logic

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3003/weather/prediction/${ccaa}`);
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [ccaa]);


  //#endregion

  return (
    <div className='dashboard-container'>
      <button onClick={handleLogout}>Cerrar sesión</button>
      
      <div>
        <h1>Predicción de hoy</h1>

        {/* <select value={ccaa} onChange={(e) => setCcaa(e.target.value)}>
          {Object.entries(CCAA).map(([code, name]) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>

        <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </div>
    </div>
  );
}
