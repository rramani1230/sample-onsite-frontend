import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { Plus, MoreHorizontal } from 'lucide-react';

function App() {
  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      <Sidebar />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        
        <main className="flex-1 overflow-x-auto overflow-y-hidden p-8">
          <div className="grid grid-cols-4 gap-6 h-full">
            {/* Backlog Column */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col min-h-0 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gray-400 rounded-full shadow-sm"></div>
                  <h2 className="font-bold text-gray-900 text-lg">Backlog</h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">0</span>
                  <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreHorizontal size={18} className="text-gray-400" />
                  </button>
                </div>
              </div>
              
              <div className="flex-1 space-y-3 overflow-y-auto mb-4">
                <div className="text-center py-16 text-gray-400">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">No tasks yet</p>
                  <p className="text-xs mt-1">Add your first task</p>
                </div>
              </div>
              
              <button className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-xl transition-all border-2 border-dashed border-gray-300 hover:border-gray-400">
                <Plus size={18} />
                Add Task
              </button>
            </div>

            {/* In Progress Column */}
            <div className="bg-white rounded-2xl shadow-lg border border-blue-200 p-6 flex flex-col min-h-0 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full shadow-sm"></div>
                  <h2 className="font-bold text-gray-900 text-lg">In Progress</h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1.5 rounded-full">0</span>
                  <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreHorizontal size={18} className="text-gray-400" />
                  </button>
                </div>
              </div>
              
              <div className="flex-1 space-y-3 overflow-y-auto mb-4">
                <div className="text-center py-16 text-gray-400">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">No active tasks</p>
                  <p className="text-xs mt-1">Start working on something</p>
                </div>
              </div>
              
              <button className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-xl transition-all border-2 border-dashed border-blue-300 hover:border-blue-400">
                <Plus size={18} />
                Add Task
              </button>
            </div>

            {/* Review Column */}
            <div className="bg-white rounded-2xl shadow-lg border border-yellow-200 p-6 flex flex-col min-h-0 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm"></div>
                  <h2 className="font-bold text-gray-900 text-lg">Review</h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-yellow-600 bg-yellow-100 px-3 py-1.5 rounded-full">0</span>
                  <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreHorizontal size={18} className="text-gray-400" />
                  </button>
                </div>
              </div>
              
              <div className="flex-1 space-y-3 overflow-y-auto mb-4">
                <div className="text-center py-16 text-gray-400">
                  <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Nothing to review</p>
                  <p className="text-xs mt-1">Tasks awaiting review will appear here</p>
                </div>
              </div>
              
              <button className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium text-yellow-600 hover:bg-yellow-50 rounded-xl transition-all border-2 border-dashed border-yellow-300 hover:border-yellow-400">
                <Plus size={18} />
                Add Task
              </button>
            </div>

            {/* Done Column */}
            <div className="bg-white rounded-2xl shadow-lg border border-green-200 p-6 flex flex-col min-h-0 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
                  <h2 className="font-bold text-gray-900 text-lg">Done</h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-green-600 bg-green-100 px-3 py-1.5 rounded-full">0</span>
                  <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreHorizontal size={18} className="text-gray-400" />
                  </button>
                </div>
              </div>
              
              <div className="flex-1 space-y-3 overflow-y-auto mb-4">
                <div className="text-center py-16 text-gray-400">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">No completed tasks</p>
                  <p className="text-xs mt-1">Finished tasks will appear here</p>
                </div>
              </div>
              
              <button className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium text-green-600 hover:bg-green-50 rounded-xl transition-all border-2 border-dashed border-green-300 hover:border-green-400">
                <Plus size={18} />
                Add Task
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
