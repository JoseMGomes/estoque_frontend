import { z } from "zod";

export const SignUpSchema = z.object({
  name: z.string().min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
  email: z.string().email({ message: "Insira um e-mail válido." }),
  password: z.string().min(6, { message: "A senha deve ter no mínimo 6 caracteres." }),
  passwordConfirm: z.string().min(6, { message: "A senha deve ter no mínimo 6 caracteres." }),
}).refine((data) => data.password === data.passwordConfirm, {
  message: "A senha e a confirmação de senha não são iguais.",
  path: ["passwordConfirm"],
});

export const LoginSchema = z.object({
  email: z.string().email({ message: "Insira um e-mail válido." }),
  password: z.string().min(6, { message: "A senha deve ter no mínimo 6 caracteres." }),
});

export const TokenUserSchema = z.object({
  id: z.number(),
  email: z.string().email({ message: "Insira um e-mail válido." }),
});
