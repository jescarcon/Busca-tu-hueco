import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    //#region variables
    const navigate = useNavigate();
    
    const baseUrl = import.meta.env.VITE_DEBUG_MODE === 'true'
        ? import.meta.env.VITE_LOCAL_API_URL
        : import.meta.env.VITE_REMOTE_API_URL;


    // Esquema de validación con Zod
    const registerSchema = z.object({
        name: z.string().min(2, 'Nombre muy corto'),
        email: z.email('Email inválido'),
        password: z.string().min(2, 'La contraseña debe tener al menos 6 caracteres'),
    });

    //#endregion

    //#region Logic

    // React Hook Form y Zod
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data) => {
        try {
            await axios.post(`${baseUrl}/auth/register`, data);
            alert('Usuario creado con éxito. Ya puedes iniciar sesión.');
            navigate('/login');
        } catch (error) {
            alert('Error en el registro. Revisa los datos e intenta de nuevo. ' + error);
        }
    };

    //#endregion

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Crear cuenta</h1>

            <input placeholder="Nombre" {...register('name')} />
            {errors.name && <p>{errors.name.message}</p>}

            <input placeholder="Email" {...register('email')} />
            {errors.email && <p>{errors.email.message}</p>}

            <input type="password" placeholder="Contraseña" {...register('password')} />
            {errors.password && <p>{errors.password.message}</p>}

            <button type="submit">Registrar</button>

            <p>
                ¿Ya tienes cuenta?{' '}
                <button type="button" onClick={() => navigate('/login')}>
                    Iniciar sesión
                </button>
            </p>
        </form>
    );
}
