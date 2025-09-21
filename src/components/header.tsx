import logo from '../assets/logo-challenge.png'
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 flex justify-center" >
            <div className="flex justify-between items-center w-full max-w-[1200px] px-5 has-[70]:">
                <div className="flex items-center gap-2 text-xl font-bold">
                    <img src={logo} alt="logo" className="w-[65px] h-[65px]" />
                    <Link to="/">
                        <span className="text-indigo-800">HealthSupport</span>
                    </Link>
                </div>
                <nav className="hidden md:flex items-center gap-6">
                    <a className="text-sm font-medium hover:text-indigo-600 padding" href="#solucoes">Soluções</a>
                    <a className="text-sm font-medium hover:text-indigo-600" href="#como-funciona">Como Funciona</a>
                    <a className="text-sm font-medium hover:text-indigo-600" href="#depoimentos">Depoimentos</a>
                    <a href="contato.html" className="text-sm font-medium hover:text-indigo-600">Contato</a>
                    <Link to="/dashboard" className='botoes'>
                        Entrar
                    </Link>
                    <a href="" className="botoes">
                        Cadastre-se
                    </a>
                </nav>
            </div>
        </header>
    )
}