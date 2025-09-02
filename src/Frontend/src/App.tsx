import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages/home/home';
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';
import Dashboard from './components/pages/dashboard/dashboard';
import Documents from './components/pages/documents/documents';
import Reservations from './components/pages/reservations/reservations';


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/documents" element={<Documents/>} />
        <Route path="/reservations" element={<Reservations/>} />

      </Routes>
    </BrowserRouter>
  );
}
