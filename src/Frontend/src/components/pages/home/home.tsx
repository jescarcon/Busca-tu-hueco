import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import ImageCarousel from "../../utils/carrousel/carrousel";
import Footer from "../../utils/footer/footer";
import CustomNavbar from "../../utils/navbar/navbar";

export default function Home() {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login");
    };

    const goToRegister = () => {
        navigate("/register");
    };

    const images1 = [
        "https://picsum.photos/id/1015/800/400",
        "https://picsum.photos/id/1016/800/400",
    ];

    const images2 = [
        "https://picsum.photos/id/1025/800/400",
        "https://picsum.photos/id/1035/800/400",
        "https://picsum.photos/id/1045/800/400",
    ];

    return (
        <div className="home-container">
            <div className="home-navbar">
                <div className="home-navbar-logo">Logo</div>
                <div className="home-navbar-items">
                    <div className="home-navbar-item">1</div>
                    <div className="home-navbar-item">2</div>
                    <div className="home-navbar-item">3</div>
                </div>
                <div className="home-navbar-profile">Perfil</div>
            </div>
            <CustomNavbar/>
            <h1 className="titulo">Busca tu Hueco</h1>
            <ImageCarousel
                images={[
                    "https://picsum.photos/id/1015/800/400",
                    "https://picsum.photos/id/1016/800/400",
                ]}
                width="100%"
                height="400px"
                interval={0}
            />

            <ImageCarousel
                images={images2}
                width="80%"
                height="400px"
                interval={3000}
            />
            <Footer />

        </div>
    );
}
