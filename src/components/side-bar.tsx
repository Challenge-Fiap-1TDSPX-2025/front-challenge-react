export default function Sidebar() {
    return (
        <aside className="w-72 bg-gray text-gray-900 h-screen overflow-y-auto flex-shrink-0 flex flex-col border-r border-gray-900">
            <div className="flex items-center gap-2 p-6 border-b border-gray-300 font-bold text-indigo-700 text-xl justify-center">
                Health Support
            </div>

            <div className="flex items-center p-5 border-b border-gray-800 gap-3">
                <div className="w-10 h-10 bg-indigo-600 rounded-full overflow-hidden">
                    <img src="/img/profile-user.png" alt="perfil" className="w-full" />
                </div>
                <div>
                    <h3 className="text-base font-medium text-gray-800 mb-0.5">Carlos Silva</h3>
                    <p className="text-xs text-gray-600">carlos.silva@empresa.com</p>
                </div>
            </div>

            <nav className="flex-1">
                <ul className="flex flex-col p-2">
                    <li className="flex items-center gap-3 px-5 py-3 text-gray-600 hover:bg-indigo-600 hover:text-white rounded cursor-pointer">
                        <img src="/img/group.png" className="w-5" alt="Usuários" />
                        Usuários
                    </li>
                    <li className="flex items-center gap-3 px-5 py-3 text-gray-600 hover:bg-indigo-600 hover:text-white rounded cursor-pointer">
                        <img src="/img/ticket.png" className="w-5" alt="Tickets" />
                        Tickets
                    </li>
                    <li className="flex items-center gap-3 px-5 py-3 text-gray-600 hover:bg-indigo-600 hover:text-white rounded cursor-pointer">
                        <img src="/img/settings.png" className="w-5" alt="Configurações" />
                        Configurações
                    </li>
                </ul>
            </nav>


            <div className="p-5 border-t mt-auto">
                <button className="flex items-center gap-2 w-full px-3 py-3 bg-indigo-500 text-white rounded hover:bg-indigo-600 hover:text-white transition-colors">
                    <span>Sair</span>
                </button>
            </div>

        </aside>
    );
}
