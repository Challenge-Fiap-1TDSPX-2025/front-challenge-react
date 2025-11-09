import { z } from "zod";

export const cadastroSchema = z
  .object({
    nome: z
      .string()
      .nonempty("O nome é obrigatório")
      .min(3, "O nome deve ter pelo menos 3 caracteres"),

    email: z
      .string()
      .nonempty("O e-mail é obrigatório")
      .email("Formato de e-mail inválido"),

    senha: z
      .string()
      .nonempty("A senha é obrigatória")
      .min(6, "A senha deve ter pelo menos 6 caracteres"),

    confirmarSenha: z.string().nonempty("Confirme sua senha"),

    cpf: z
      .string()
      .nonempty("O CPF é obrigatório")
      .regex(/^\d{11}$/, "O CPF deve conter exatamente 11 dígitos"),

    rg: z
      .string()
      .nonempty("O RG é obrigatório")
      .min(5, "RG inválido"),

    dataNascimento: z
      .string()
      .nonempty("A data de nascimento é obrigatória")
      .refine(
        (val) => !isNaN(Date.parse(val)),
        "Data de nascimento inválida"
      ),

    endereco: z.string().nonempty("O endereço é obrigatório"),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    message: "As senhas não conferem",
    path: ["confirmarSenha"],
  });

// ✅ Tipo inferido automaticamente a partir do schema
export type CadastroFormData = z.infer<typeof cadastroSchema>;
