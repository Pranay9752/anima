import React from 'react';
import { EffectComposer, Bloom, MotionBlur } from '@react-three/postprocessing';
import { BlendFunction, DepthOfField } from 'postprocessing';

interface EffectsProps {
  qualityLevel: 'low' | 'medium' | 'high';
}

export default function Effects({ qualityLevel }: EffectsProps) {
  if (qualityLevel === 'low') return null;
  
  return (
    <EffectComposer>
      {/* Basic bloom effect for all quality levels above low */}
      <Bloom
        intensity={0.5}
        luminanceThreshold={0.2}
        luminanceSmoothing={0.9}
        blendFunction={BlendFunction.SCREEN}
      />
      
      {/* Motion blur only for high quality */}
      {qualityLevel === 'high' && (
        <MotionBlur
          blendFunction={BlendFunction.NORMAL}
          samples={6}
          intensity={1}
        />
      )}
      
      {/* Depth of field for medium and high quality */}
      {qualityLevel !== 'low' && (
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
        />
      )}
    </EffectComposer>
  );
}