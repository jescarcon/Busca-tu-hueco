import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './register.css';

export default function Register() {
    const navigate = useNavigate();
    const baseUrl = import.meta.env.VITE_DEBUG_MODE === 'true'
        ? import.meta.env.VITE_LOCAL_API_URL
        : import.meta.env.VITE_REMOTE_API_URL;

    const registerSchema = z.object({
        name: z.string().min(2, 'Nombre muy corto'),
        email: z.string().email('Email inválido'),
        password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
    });

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data: any) => {
        try {
            await axios.post(`${baseUrl}/auth/register`, data);
            alert('Usuario creado con éxito. Ya puedes iniciar sesión.');
            navigate('/');
        } catch (error: any) {
            alert('Error en el registro. Revisa los datos e intenta de nuevo. ' + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div className="register-page">
            <form onSubmit={handleSubmit(onSubmit)} className="register-form">
                <h1 className="register-title">Crear cuenta</h1>

                <div className="form-group">
                    <label className="form-label">Nombre</label>
                    <input
                        className={`form-input ${errors.name ? 'input-error' : ''}`}
                        placeholder="Tu nombre"
                        {...register('name')}
                    />
                    {errors.name && <span className="form-error">{errors.name.message}</span>}
                </div>

                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                        className={`form-input ${errors.email ? 'input-error' : ''}`}
                        placeholder="correo@ejemplo.com"
                        {...register('email')}
                    />
                    {errors.email && <span className="form-error">{errors.email.message}</span>}
                </div>

                <div className="form-group">
                    <label className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className={`form-input ${errors.password ? 'input-error' : ''}`}
                        placeholder="••••••••"
                        {...register('password')}
                    />
                    {errors.password && <span className="form-error">{errors.password.message}</span>}
                </div>

                <button type="submit" disabled={isSubmitting} className="submit-btn">
                    {isSubmitting ? 'Creando...' : 'Registrar'}
                </button>

                
            </form>
        </div>
    );
}
