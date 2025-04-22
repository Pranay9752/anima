import { create } from 'zustand';

interface AnimationState {
  scrollProgress: number;
  reducedMotion: boolean;
  soundEnabled: boolean;
  qualityLevel: 'low' | 'medium' | 'high';
  isPaused: boolean;
  setScrollProgress: (progress: number) => void;
  toggleReducedMotion: () => void;
  toggleSound: () => void;
  setQualityLevel: (level: 'low' | 'medium' | 'high') => void;
  togglePause: () => void;
}

export const useStore = create<AnimationState>((set) => ({
  scrollProgress: 0,
  reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  soundEnabled: true,
  qualityLevel: 'medium',
  isPaused: false,
  
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
  
  toggleReducedMotion: () => set((state) => ({ 
    reducedMotion: !state.reducedMotion 
  })),
  
  toggleSound: () => set((state) => ({ 
    soundEnabled: !state.soundEnabled 
  })),
  
  setQualityLevel: (level) => set({ qualityLevel: level }),
  
  togglePause: () => set((state) => ({ 
    isPaused: !state.isPaused 
  })),
}));