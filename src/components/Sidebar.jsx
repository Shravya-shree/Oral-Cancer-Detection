import React from 'react';
import { NavLink } from 'react-router-dom';
import { Upload, PieChart, FileText, Eye, LogOut, Activity, ShieldCheck } from 'lucide-react';

const Sidebar = ({ onLogout }) => {
  const menuItems = [
    { path: '/upload', icon: Upload, label: 'Upload Image' },
    { path: '/analysis', icon: PieChart, label: 'Analysis Result' },
    { path: '/gradcam', icon: Eye, label: 'Grad-CAM' },
    { path: '/report', icon: FileText, label: 'Medical Report' },
  ];

  return (
    <aside className="w-72 bg-[#0f172a] border-r border-white/5 flex flex-col p-6 h-screen sticky top-0">
      <div className="flex items-center gap-3 mb-12 px-2">
        <div className="bg-teal-500 p-2 rounded-lg">
          <ShieldCheck className="text-white" size={24} />
        </div>
        <span className="font-bold text-xl tracking-tight text-white">OralScan <span className="text-teal-500">AI</span></span>
      </div>

      <nav className="flex-1 space-y-3">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-4 rounded-xl transition-all font-medium ${
                isActive
                  ? 'bg-gradient-to-r from-teal-500/20 to-purple-500/20 border border-teal-500/30 text-teal-400 shadow-[0_0_15px_rgba(20,184,166,0.1)]'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`
            }
          >
            <item.icon size={20} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <button 
        onClick={onLogout}
        className="mt-auto flex items-center gap-4 px-4 py-4 text-slate-500 hover:text-red-400 transition-all font-semibold"
      >
        <LogOut size={20} />
        Sign Out
      </button>
    </aside>
  );
};

export default Sidebar;