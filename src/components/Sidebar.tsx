import { LayoutDashboard, Users, Settings, FolderKanban } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-full">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          TeamSync
        </h1>
      </div>
      
      <nav className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-1">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg transition-all hover:bg-blue-700 shadow-sm"
          >
            <LayoutDashboard size={20} />
            My Work
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
          >
            <FolderKanban size={20} />
            Projects
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
          >
            <Users size={20} />
            Team
          </a>
        </div>

        <div className="mt-8">
          <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Pinned Boards
          </h3>
          <div className="space-y-1">
            <a
              href="#"
              className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
            >
              🚀 Sprint Planning
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
            >
              🐛 Bug Tracker
            </a>
          </div>
        </div>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg w-full transition-all">
          <Settings size={20} />
          Settings
        </button>
      </div>
    </aside>
  );
}
