import { z } from 'zod';

export const RegisterDto = z.object({
  email: z.email(),
  name: z.string().min(0),
  password: z.string().min(0),
  role: z.string().default('user'),  
  company_id: z.string().default(''), 
});
export const LoginDto = z.object({
  email: z.email(),
  password: z.string().min(0),
});

export type RegisterDtoType = z.infer<typeof RegisterDto>;
export type LoginDtoType = z.infer<typeof LoginDto>;
