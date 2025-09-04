import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { BASE_API_URL } from "../../../constants";

interface User {
    role: string;
}

interface AuthContextProps {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decoded: any = jwtDecode(token);
            setUser({ role: decoded.role });
        }
    }, []);

    const login = async (email: string, password: string) => {
        const res = await axios.post(`${BASE_API_URL}/auth/login`, { email, password });
        const token = res.data.accessToken;

        localStorage.setItem("token", token);

        const decoded: any = jwtDecode(token);
        setUser({ role: decoded.role });
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
    return context;
}
