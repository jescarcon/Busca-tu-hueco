import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    //#region Variables
    const navigate = useNavigate();

    const loginSchema = z.object({
        email: z.email('Email inválido'),
        password: z.string().min(1, 'Contraseña obligatoria'),
    });

    const baseUrl = import.meta.env.VITE_DEBUG_MODE === 'true'
        ? import.meta.env.VITE_LOCAL_API_URL
        : import.meta.env.VITE_REMOTE_API_URL;

    //#endregion

    //#region Logic

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data) => {
        try {
            const res = await axios.post(`${baseUrl}/auth/login`, data);

            localStorage.setItem('token', res.data.accessToken);

            alert('Inicio de sesión exitoso');
            navigate('/dashboard');
        } catch (error) {
            alert('Error al iniciar sesión. Verifica tus credenciales.');
        }
    };
    //#endregion
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Iniciar sesión</h1>

            <input placeholder="Email" {...register('email')} />
            {errors.email && <p>{errors.email.message}</p>}

            <input type="password" placeholder="Contraseña" {...register('password')} />
            {errors.password && <p>{errors.password.message}</p>}

            <button type="submit">Entrar</button>
            

            <p>
                ¿No tienes cuenta?{' '}
                <button type="button" onClick={() => navigate('/register')}>
                    Crear cuenta
                </button>
            </p>
        </form>
    );
}
