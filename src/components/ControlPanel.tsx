import React from 'react';
import { Volume2, VolumeX, Zap, MessageSquare, X } from 'lucide-react';
import { useStore } from '../store/animationStore';

interface ControlPanelProps {
  onClose: () => void;
}

export default function ControlPanel({ onClose }: ControlPanelProps) {
  const { 
    reducedMotion, 
    soundEnabled, 
    qualityLevel,
    isPaused,
    toggleReducedMotion, 
    toggleSound, 
    setQualityLevel,
    togglePause
  } = useStore();
  
  return (
    <div className="fixed bottom-16 right-4 bg-gray-900/90 backdrop-blur-md p-4 rounded-lg shadow-lg z-50 w-80">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Animation Settings</h3>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Close settings panel"
        >
          <X size={20} />
        </button>
      </div>
      
      <div className="space-y-4">
        {/* Reduced Motion Toggle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MessageSquare size={20} className="mr-2" />
            <span>Reduced Motion</span>
          </div>
          <button 
            onClick={toggleReducedMotion}
            className={`w-12 h-6 rounded-full transition-colors ${
              reducedMotion ? 'bg-green-600' : 'bg-gray-600'
            } relative`}
            aria-pressed={reducedMotion}
            aria-label="Toggle reduced motion"
          >
            <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
              reducedMotion ? 'left-7' : 'left-1'
            }`} />
          </button>
        </div>
        
        {/* Sound Toggle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {soundEnabled ? <Volume2 size={20} className="mr-2" /> : <VolumeX size={20} className="mr-2" />}
            <span>Sound Effects</span>
          </div>
          <button 
            onClick={toggleSound}
            className={`w-12 h-6 rounded-full transition-colors ${
              soundEnabled ? 'bg-green-600' : 'bg-gray-600'
            } relative`}
            aria-pressed={soundEnabled}
            aria-label="Toggle sound effects"
          >
            <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
              soundEnabled ? 'left-7' : 'left-1'
            }`} />
          </button>
        </div>
        
        {/* Pause/Play Toggle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Zap size={20} className="mr-2" />
            <span>{isPaused ? 'Resume Animation' : 'Pause Animation'}</span>
          </div>
          <button 
            onClick={togglePause}
            className={`w-12 h-6 rounded-full transition-colors ${
              !isPaused ? 'bg-green-600' : 'bg-gray-600'
            } relative`}
            aria-pressed={!isPaused}
            aria-label={isPaused ? 'Resume animation' : 'Pause animation'}
          >
            <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
              !isPaused ? 'left-7' : 'left-1'
            }`} />
          </button>
        </div>
        
        {/* Quality Level Selector */}
        <div>
          <label className="block mb-2">Visual Quality</label>
          <div className="grid grid-cols-3 gap-2">
            {['low', 'medium', 'high'].map((level) => (
              <button
                key={level}
                onClick={() => setQualityLevel(level as 'low' | 'medium' | 'high')}
                className={`py-2 px-3 rounded ${
                  qualityLevel === level 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-700 hover:bg-gray-600'
                } transition-colors`}
                aria-pressed={qualityLevel === level}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}