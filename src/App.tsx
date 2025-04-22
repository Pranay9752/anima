import React, { useState, useEffect } from 'react';
import F1Scene from './components/F1Scene';
import Header from './components/Header';
import ScrollContent from './components/ScrollContent';
import ControlPanel from './components/ControlPanel';
import LoadingScreen from './components/LoadingScreen';
import { Settings } from 'lucide-react';
import { useStore } from './store/animationStore';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const { reducedMotion } = useStore();
  
  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header />
          
          {/* 3D Scene Container */}
          <div className="fixed inset-0 w-full h-full z-0">
            <F1Scene />
          </div>
          
          {/* Scroll Content */}
          <div className={`relative z-10 ${reducedMotion ? 'pt-24' : 'pt-[100vh]'}`}>
            <ScrollContent />
          </div>
          
          {/* Control Panel Toggle */}
          <button 
            onClick={() => setShowControls(!showControls)}
            className="fixed bottom-4 right-4 bg-red-600 hover:bg-red-700 p-3 rounded-full z-50 shadow-lg transition-all"
            aria-label="Toggle settings panel"
          >
            <Settings size={24} />
          </button>
          
          {/* Control Panel */}
          {showControls && <ControlPanel onClose={() => setShowControls(false)} />}
        </>
      )}
    </div>
  );
}

export default App;