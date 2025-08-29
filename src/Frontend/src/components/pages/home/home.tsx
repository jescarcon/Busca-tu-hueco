import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import ImageCarousel from "../../utils/carrousel/carrousel";

export default function Home() {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login");
    };

    const goToRegister = () => {
        navigate("/register");
    };


    return (
        <div className="home-container">
            <h1>Bienvenido</h1>
            <button onClick={goToLogin}>Login</button>
            <button onClick={goToRegister}>Register</button>
        </div>
    );
}
