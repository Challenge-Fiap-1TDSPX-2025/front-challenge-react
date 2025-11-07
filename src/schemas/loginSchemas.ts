import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty("O e-mail é obrigatório")
    .email("Formato de e-mail inválido"),

  senha: z
    .string()
    .nonempty("A senha é obrigatória"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
 