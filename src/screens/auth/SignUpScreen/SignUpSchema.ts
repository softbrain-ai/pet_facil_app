import {z} from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const signUpSchema = z.object({
  username: z.string().regex(userNameRegex, 'username inválido'),
  email: z.string().email('email inválido'),
  password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres'),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
