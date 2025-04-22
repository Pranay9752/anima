import React, { useEffect, useState } from 'react';
import { Flag } from 'lucide-react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 200);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
      <div className="mb-8 animate-pulse">
        <Flag className="text-red-600" size={64} />
      </div>
      <h1 className="text-4xl font-bold mb-8">F1 Motion</h1>
      <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-red-500 to-yellow-500 transition-all duration-200" 
          style={{ width: `${Math.min(progress, 100)}%` }}
        ></div>
      </div>
      <p className="mt-4 text-gray-400">Loading 3D assets {Math.min(Math.floor(progress), 100)}%</p>
    </div>
  );
}