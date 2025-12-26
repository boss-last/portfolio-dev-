
import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Circle, Clock, Plus, Users, Layout, MoreVertical, Trash2, GripVertical } from 'lucide-react';
import { Language } from '../types';

interface Task {
  id: string;
  title: string;
  status: 'todo' | 'progress' | 'done';
  priority: 'High' | 'Medium' | 'Low';
  assignee: string;
}

interface TaskFlowDemoProps {
  onClose: () => void;
  lang: Language;
}

const TaskFlowDemo: React.FC<TaskFlowDemoProps> = ({ onClose, lang }) => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Design System Update', status: 'done', priority: 'High', assignee: 'Alex' },
    { id: '2', title: 'API Integration - Stripe', status: 'progress', priority: 'High', assignee: 'Jane' },
    { id: '3', title: 'Mobile Responsive Fixes', status: 'todo', priority: 'Medium', assignee: 'Alex' },
    { id: '4', title: 'Unit Testing - Auth Flow', status: 'todo', priority: 'Low', assignee: 'Bob' },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [activeUsers] = useState(['Alex', 'Jane', 'Bob']);
  const [isSyncing, setIsSyncing] = useState(false);

  // Simulate Socket.io real-time syncing effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsSyncing(true);
      setTimeout(() => setIsSyncing(false), 800);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const moveTask = (id: string, newStatus: Task['status']) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t));
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 500);
  };

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const newTask: Task = {
      id: Math.random().toString(36).substr(2, 9),
      title: newTaskTitle,
      status: 'todo',
      priority: 'Medium',
      assignee: 'Alex'
    };
    setTasks([newTask, ...tasks]);
    setNewTaskTitle('');
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 500);
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const t = {
    fr: {
      board: "Tableau Kanban",
      users: "Membres actifs",
      sync: "Synchronisé",
      todo: "À Faire",
      progress: "En Cours",
      done: "Terminé",
      placeholder: "Nouvelle tâche...",
      stats: "Statistiques"
    },
    en: {
      board: "Kanban Board",
      users: "Active Members",
      sync: "Synced",
      todo: "To Do",
      progress: "In Progress",
      done: "Completed",
      placeholder: "New task...",
      stats: "Statistics"
    }
  }[lang];

  const renderTask = (task: Task) => (
    <div 
      key={task.id} 
      className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-blue-500 transition-all group animate-tag-pop"
    >
      <div className="flex justify-between items-start mb-2">
        <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
          task.priority === 'High' ? 'bg-red-100 text-red-600' : 
          task.priority === 'Medium' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'
        }`}>
          {task.priority}
        </span>
        <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={() => deleteTask(task.id)} className="text-gray-400 hover:text-red-500">
            <Trash2 className="w-3 h-3" />
          </button>
        </div>
      </div>
      <h5 className="text-sm font-bold mb-3 text-gray-800 dark:text-gray-200">{task.title}</h5>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-1">
          <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-[8px] text-white font-bold">
            {task.assignee[0]}
          </div>
          <span className="text-[10px] text-gray-400 font-medium">{task.assignee}</span>
        </div>
        <div className="flex space-x-1">
          {task.status !== 'todo' && (
            <button onClick={() => moveTask(task.id, task.status === 'done' ? 'progress' : 'todo')} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors text-gray-400">
              <Clock className="w-3 h-3" />
            </button>
          )}
          {task.status !== 'done' && (
            <button onClick={() => moveTask(task.id, task.status === 'todo' ? 'progress' : 'done')} className="p-1 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded transition-colors text-emerald-500">
              <CheckCircle2 className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-gray-50 dark:bg-gray-950 w-full max-w-6xl h-[85vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-gray-200 dark:border-gray-800">
        {/* Header */}
        <div className="px-8 py-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-white dark:bg-gray-900">
          <div className="flex items-center space-x-6">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Layout className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-black tracking-tight">TaskFlow Manager</h3>
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${isSyncing ? 'bg-orange-400 animate-pulse' : 'bg-emerald-500'}`}></div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t.sync}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-center -space-x-2">
              {activeUsers.map(u => (
                <div key={u} title={u} className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-[10px] font-black cursor-help">
                  {u[0]}
                </div>
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-black">
                +2
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Board */}
        <div className="flex-1 overflow-x-auto overflow-y-hidden p-8">
          <div className="flex h-full space-x-6 min-w-max">
            {/* Column Creator */}
            <div className="w-72 flex flex-col space-y-4">
              <form onSubmit={addTask} className="relative">
                <input 
                  type="text" 
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  placeholder={t.placeholder}
                  className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none pr-10 shadow-sm"
                />
                <button type="submit" className="absolute right-3 top-3 text-blue-500 hover:scale-110 transition-transform">
                  <Plus className="w-4 h-4" />
                </button>
              </form>

              <div className="bg-white/50 dark:bg-gray-900/50 p-6 rounded-2xl border border-dashed border-gray-200 dark:border-gray-800 flex flex-col items-center justify-center text-center">
                <Clock className="w-8 h-8 text-gray-300 mb-2" />
                <p className="text-xs font-bold text-gray-400 uppercase">{t.stats}</p>
                <div className="mt-4 flex space-x-4">
                  <div className="text-center">
                    <p className="text-xl font-black">{tasks.length}</p>
                    <p className="text-[10px] text-gray-500 uppercase">Tasks</p>
                  </div>
                  <div className="w-px h-8 bg-gray-200 dark:bg-gray-800"></div>
                  <div className="text-center">
                    <p className="text-xl font-black text-emerald-500">
                      {tasks.filter(t => t.status === 'done').length}
                    </p>
                    <p className="text-[10px] text-gray-500 uppercase">Done</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Todo Column */}
            <div className="w-80 flex flex-col">
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500">{t.todo}</h4>
                  <span className="bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded text-[10px] font-bold">
                    {tasks.filter(t => t.status === 'todo').length}
                  </span>
                </div>
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex-1 overflow-y-auto space-y-3 pb-4">
                {tasks.filter(t => t.status === 'todo').map(renderTask)}
              </div>
            </div>

            {/* In Progress Column */}
            <div className="w-80 flex flex-col">
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500">{t.progress}</h4>
                  <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded text-[10px] font-bold">
                    {tasks.filter(t => t.status === 'progress').length}
                  </span>
                </div>
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex-1 overflow-y-auto space-y-3 pb-4">
                {tasks.filter(t => t.status === 'progress').map(renderTask)}
              </div>
            </div>

            {/* Completed Column */}
            <div className="w-80 flex flex-col">
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500">{t.done}</h4>
                  <span className="bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded text-[10px] font-bold">
                    {tasks.filter(t => t.status === 'done').length}
                  </span>
                </div>
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex-1 overflow-y-auto space-y-3 pb-4">
                {tasks.filter(t => t.status === 'done').map(renderTask)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskFlowDemo;
