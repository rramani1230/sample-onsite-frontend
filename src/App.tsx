import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        
        <main className="flex-1 overflow-x-auto overflow-y-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-6">
          <div className="flex gap-4 h-full pb-4">
            <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-900 flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  Backlog
                </h2>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">0</span>
              </div>
              <div className="flex-1 space-y-3 overflow-y-auto">
                <div className="text-center py-8 text-gray-400 text-sm">
                  No tasks yet
                </div>
              </div>
            </div>
            
            <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-900 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  In Progress
                </h2>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">0</span>
              </div>
              <div className="flex-1 space-y-3 overflow-y-auto">
                <div className="text-center py-8 text-gray-400 text-sm">
                  No tasks yet
                </div>
              </div>
            </div>
            
            <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-900 flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  Review
                </h2>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">0</span>
              </div>
              <div className="flex-1 space-y-3 overflow-y-auto">
                <div className="text-center py-8 text-gray-400 text-sm">
                  No tasks yet
                </div>
              </div>
            </div>
            
            <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-900 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Done
                </h2>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">0</span>
              </div>
              <div className="flex-1 space-y-3 overflow-y-auto">
                <div className="text-center py-8 text-gray-400 text-sm">
                  No tasks yet
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
