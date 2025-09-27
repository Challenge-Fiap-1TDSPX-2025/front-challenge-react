import profileUser from '../assets/profile-user.png'
import group from '../assets/group.png'
import ticket from '../assets/ticket.png'
import settings from '../assets/settings.png'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <aside className="w-72 bg-gray text-gray-900 h-screen overflow-y-auto flex-shrink-0 flex flex-col border-r border-gray-900">
            <div className="flex items-center gap-2 p-6 border-b border-gray-300 font-bold text-indigo-700 text-xl justify-center">
                Health Support
            </div>

            <div className="flex items-center p-5 border-b border-gray-800 gap-3">
                <div className="w-10 h-10 bg-indigo-600 rounded-full overflow-hidden">
                    <img src={profileUser} alt="icone representando uma imagem de uma pessoa" className="w-full" />
                </div>
                <div>
                    <h3 className="text-base font-medium text-gray-800 mb-0.5">Carlos Silva</h3>
                    <p className="text-xs text-gray-600">carlos.silva@empresa.com</p>
                </div>
            </div>

            <nav className="flex-1">
                <ul className="flex flex-col p-2">
                    <li className="flex items-center gap-3 px-5 py-3 text-gray-600 hover:bg-indigo-600 hover:text-white rounded cursor-pointer">
                        <img src={group}className="w-5" alt="Usuários" />
                        Usuários
                    </li>
                    <li className="flex items-center gap-3 px-5 py-3 text-gray-600 hover:bg-indigo-600 hover:text-white rounded cursor-pointer">
                        <img src={ticket} className="w-5" alt="imagem de tickets superexpostos" />
                        Tickets
                    </li>
                    <li className="flex items-center gap-3 px-5 py-3 text-gray-600 hover:bg-indigo-600 hover:text-white rounded cursor-pointer">
                        <img src={settings} className="w-5" alt="Configurações" />
                        Configurações
                    </li>
                </ul>
            </nav>


            <div className="p-5 border-t border-gray-300">
                <Link to="/login" className="w-full block text-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-sky-950 transition-colors">
                Sair
                </Link>
            </div>

        </aside>
    )
}
