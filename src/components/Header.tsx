import { Plus, Bell, Filter } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-24 bg-white border-b border-gray-200 flex items-center justify-between px-10 shadow-sm flex-shrink-0">
      <div className="flex items-center gap-6 min-w-0 mr-8">
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500 font-medium whitespace-nowrap">Projects</span>
          <span className="text-gray-300">/</span>
          <span className="text-base font-bold text-gray-900 whitespace-nowrap">Sprint Planning</span>
        </div>
      </div>

      <div className="flex items-center gap-6 flex-shrink-0">
        <div className="relative flex-shrink-0">
          <input
            type="text"
            placeholder="Search tasks, assignees, labels..."
            className="px-4 py-3 w-72 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-gray-50 focus:bg-white shadow-sm"
          />
        </div>

        <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 bg-white text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-50 transition-all shadow-sm flex-shrink-0 whitespace-nowrap">
          <Filter size={18} />
          <span>Filter</span>
        </button>
        
        <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl text-sm font-semibold hover:shadow-lg transition-all shadow-md hover:scale-105 flex-shrink-0 whitespace-nowrap">
          <Plus size={20} />
          <span>New Task</span>
        </button>

        <div className="flex items-center gap-5 ml-4 pl-6 border-l border-gray-200 flex-shrink-0">
          <button className="p-3 text-gray-600 hover:bg-gray-100 rounded-xl relative transition-all flex-shrink-0">
            <Bell size={22} />
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white"></span>
          </button>

          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-xl transition-all flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md">
              R
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
