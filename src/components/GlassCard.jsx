import React from 'react';

const GlassCard = ({ children, className = "", title = "" }) => {
  return (
    <div className={`glass rounded-[2rem] border-white/10 p-8 ${className}`}>
      {title && (
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};

export default GlassCard;