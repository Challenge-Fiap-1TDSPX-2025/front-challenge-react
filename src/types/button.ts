export type ButtonProps = {
  to: string; // O caminho para onde o link vai navegar
  variant: 'indigo' | 'teal'; // A variação de cor que vamos usar
  children: React.ReactNode; // O texto que vai dentro do botão
};