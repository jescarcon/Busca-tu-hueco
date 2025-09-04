import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/home";
import Register from "./components/pages/auth/Register";
import Dashboard from "./components/pages/dashboard/dashboard";
import Documents from "./components/pages/documents/documents";
import Reservations from "./components/pages/reservations/reservations";
import CustomNavbar from "./components/utils/navbar/navbar";
import { CustomFooter } from "./components/utils/footer/footer";
import ProtectedRoute from "./components/utils/protectedRoute/protectedRoute";
import "./App.css";
import { AuthProvider } from "./components/utils/authContext/authContext";
import Error from "./components/pages/error/error";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="app-container">
          <CustomNavbar />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Error/>} />

              {/* Rutas protegidas */}
              <Route path="/dashboard" element={<ProtectedRoute>   <Dashboard />  </ProtectedRoute>} />
              <Route path="/documents" element={<ProtectedRoute>   <Documents />   </ProtectedRoute>} />
              <Route path="/reservations" element={<ProtectedRoute> <Reservations /> </ProtectedRoute>} />
            </Routes>
          </main>

          <CustomFooter />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}
