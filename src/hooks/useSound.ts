import { useEffect, useRef } from 'react';
import { Howl } from 'howler';
import { useStore } from '../store/animationStore';

export function useSound() {
  const { soundEnabled, scrollProgress, isPaused } = useStore();
  const engineSoundRef = useRef<Howl | null>(null);
  
  useEffect(() => {
    // Initialize engine sound
    engineSoundRef.current = new Howl({
      src: ['https://assets.codepen.io/217233/engine.mp3'], // Placeholder URL - would need a real engine sound
      loop: true,
      volume: 0.5,
      rate: 1.0,
    });
    
    return () => {
      if (engineSoundRef.current) {
        engineSoundRef.current.stop();
      }
    };
  }, []);
  
  // Control sound based on app state
  useEffect(() => {
    if (!engineSoundRef.current) return;
    
    if (!soundEnabled || isPaused) {
      engineSoundRef.current.fade(engineSoundRef.current.volume(), 0, 500);
      setTimeout(() => {
        if (engineSoundRef.current) {
          engineSoundRef.current.pause();
        }
      }, 500);
    } else if (engineSoundRef.current.playing()) {
      // Adjust engine sound pitch based on scroll
      const newRate = 0.8 + scrollProgress * 0.4;
      engineSoundRef.current.rate(newRate);
      
      // Adjust volume based on progress
      const volumeLevel = 0.3 + scrollProgress * 0.7;
      engineSoundRef.current.fade(engineSoundRef.current.volume(), volumeLevel, 200);
    }
  }, [scrollProgress, soundEnabled, isPaused]);
  
  const playEngineSound = () => {
    if (engineSoundRef.current && soundEnabled && !isPaused) {
      engineSoundRef.current.play();
      engineSoundRef.current.fade(0, 0.5, 1000);
    }
  };
  
  const stopEngineSound = () => {
    if (engineSoundRef.current) {
      engineSoundRef.current.fade(engineSoundRef.current.volume(), 0, 500);
      setTimeout(() => {
        if (engineSoundRef.current) {
          engineSoundRef.current.stop();
        }
      }, 500);
    }
  };
  
  return { playEngineSound, stopEngineSound };
}