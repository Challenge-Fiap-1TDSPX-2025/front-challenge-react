import type { LinkRodape as LinkRodapeType } from "../types/link-rodape";

export function LinkRodape({ tituloLink, itemListaLink }: LinkRodapeType) {
  return (
    <div>
      <h3 className="text-[0.875rem] font-semibold mb-4">{tituloLink}</h3>
      <ul>
        {itemListaLink.map((item, index) => (
          <li
            key={index}
            className="mb-2 text-[#222325] text-sm transition-colors duration-300 ease-in-out hover:text-indigo-600 font-medium"
          >
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
