import { Calendar, User, Tag } from 'lucide-react';
import type { TaskData } from './CreateTaskModal';

interface TaskCardProps {
  task: TaskData;
  onDragStart?: (task: TaskData) => void;
}

export default function TaskCard({ task, onDragStart }: TaskCardProps) {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', JSON.stringify(task));
    if (onDragStart) {
      onDragStart(task);
    }
  };
  const priorityColors = {
    low: 'bg-green-100 text-green-700 border-green-200',
    medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    high: 'bg-red-100 text-red-700 border-red-200'
  };

  const priorityLabels = {
    low: '🟢 Low',
    medium: '🟡 Medium',
    high: '🔴 High'
  };

  return (
    <div 
      draggable
      onDragStart={handleDragStart}
      className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-all cursor-move group active:opacity-50"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-gray-900 text-base group-hover:text-blue-600 transition-colors line-clamp-2">
          {task.title}
        </h3>
        <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold border ${priorityColors[task.priority]} whitespace-nowrap ml-2`}>
          {priorityLabels[task.priority]}
        </span>
      </div>

      {task.description && (
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {task.description}
        </p>
      )}

      <div className="space-y-2">
        {task.assignee && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <User size={14} className="text-gray-400" />
            <span className="font-medium">{task.assignee}</span>
          </div>
        )}

        {task.dueDate && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar size={14} className="text-gray-400" />
            <span>{new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
        )}

        {task.labels.length > 0 && (
          <div className="flex items-start gap-2 text-sm">
            <Tag size={14} className="text-gray-400 mt-0.5" />
            <div className="flex flex-wrap gap-1.5">
              {task.labels.map((label, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-md text-xs font-medium border border-blue-200"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
