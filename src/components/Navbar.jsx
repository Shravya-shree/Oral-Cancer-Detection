import React from 'react';
import { Bell, Search, User } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="flex justify-between items-center mb-10 w-full">
      <div className="relative w-96 hidden md:block">
        <Search className="absolute left-4 top-3 text-slate-500" size={18} />
        <input 
          type="text" 
          placeholder="Search patient records..." 
          className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-12 pr-4 text-sm text-white focus:border-teal-500/50 outline-none transition-all"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2 text-slate-400 hover:text-teal-400 transition-colors">
          <Bell size={22} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-purple-500 rounded-full border-2 border-[#0a0f1e]"></span>
        </button>
        
        <div className="flex items-center gap-3 pl-6 border-l border-white/10">
          <div className="text-right hidden sm:block">
            <p className="text-white text-sm font-bold tracking-wide">Dr. Kamalesh</p>
            <p className="text-teal-500 text-[10px] font-bold uppercase">Medical Officer</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-purple-600 flex items-center justify-center shadow-lg shadow-teal-500/20">
            <User className="text-white" size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
