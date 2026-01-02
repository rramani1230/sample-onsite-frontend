import { LayoutDashboard, Users, Settings, FolderKanban, Star } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-80 bg-white border-r border-gray-200 flex flex-col h-full shadow-sm">
      <div className="px-10 py-14 border-b border-gray-200">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
          TeamSync v2
        </h1>
        <p className="text-xs text-gray-500 mt-4">Collaborative workspace</p>
      </div>
      
      <nav className="flex-1 px-8 py-12 overflow-y-auto">
        <div className="space-y-3">
          <a
            href="#"
            className="flex items-center gap-5 px-6 py-6 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl transition-all hover:shadow-lg hover:scale-[1.02] shadow-md"
          >
            <LayoutDashboard size={24} />
            <span>My Work</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-5 px-6 py-6 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-xl transition-all hover:shadow-sm"
          >
            <FolderKanban size={24} />
            <span>Projects</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-5 px-6 py-6 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-xl transition-all hover:shadow-sm"
          >
            <Users size={24} />
            <span>Team</span>
          </a>
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-between px-6 mb-5">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Pinned Boards
            </h3>
            <Star size={16} className="text-gray-400" />
          </div>
          <div className="space-y-3">
            <a
              href="#"
              className="flex items-center gap-5 px-6 py-5 text-sm text-gray-700 hover:bg-gray-50 rounded-xl transition-all group"
            >
              <span className="text-xl">🚀</span>
              <span className="group-hover:text-gray-900 font-medium">Sprint Planning</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-5 px-6 py-5 text-sm text-gray-700 hover:bg-gray-50 rounded-xl transition-all group"
            >
              <span className="text-xl">🐛</span>
              <span className="group-hover:text-gray-900 font-medium">Bug Tracker</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-5 px-6 py-5 text-sm text-gray-700 hover:bg-gray-50 rounded-xl transition-all group"
            >
              <span className="text-xl">✨</span>
              <span className="group-hover:text-gray-900 font-medium">Feature Requests</span>
            </a>
          </div>
        </div>
      </nav>

      <div className="px-8 py-12 border-t border-gray-200 bg-gray-50">
        <button className="flex items-center gap-5 px-6 py-6 text-base font-medium text-gray-700 hover:bg-white rounded-xl w-full transition-all hover:shadow-sm">
          <Settings size={24} />
          <span>Settings</span>
        </button>
      </div>
    </aside>
  );
}
