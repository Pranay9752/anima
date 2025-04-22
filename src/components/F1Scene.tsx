import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { useStore } from '../store/animationStore';
import { useSound } from '../hooks/useSound';
import { gsap } from 'gsap';
import { OrbitControls } from '@react-three/drei';
import FallbackMessage from './FallbackMessage';
import LoadingModel from './LoadingModel';
import Effects from './Effects';

// Placeholder for the F1 car - in production would use a real GLTF model
function F1Car() {
  const ref = useRef<THREE.Group>();
  const { scrollProgress, reducedMotion, isPaused } = useStore();
  const { playEngineSound, stopEngineSound } = useSound();
  
  useEffect(() => {
    if (!ref.current || reducedMotion || isPaused) return;
    
    // Initial animation when component mounts
    const tl = gsap.timeline();
    
    tl.fromTo(
      ref.current.position,
      { x: -10 },
      { 
        x: -2, 
        duration: 2, 
        ease: "power2.out",
        onStart: playEngineSound,
      }
    );
    
    return () => {
      tl.kill();
      stopEngineSound();
    };
  }, [reducedMotion, isPaused, playEngineSound, stopEngineSound]);
  
  useEffect(() => {
    if (!ref.current || reducedMotion || isPaused) return;
    
    // Update position based on scroll
    gsap.to(ref.current.position, {
      x: -2 + (scrollProgress * 5), // Move right as scroll increases
      duration: 0.5,
      ease: "power1.out"
    });
    
    // Add slight rotation based on scroll for dynamic feel
    gsap.to(ref.current.rotation, {
      y: scrollProgress * 0.2,
      z: scrollProgress * 0.05,
      duration: 0.5,
    });
    
  }, [scrollProgress, reducedMotion, isPaused]);

  return (
    <group ref={ref} position={[-10, 0, 0]}>
      {/* This is a placeholder for the F1 car model */}
      {/* In a real implementation, you would import an actual GLTF model */}
      <mesh castShadow>
        <boxGeometry args={[4, 1, 2]} />
        <meshStandardMaterial color="red" />
      </mesh>
      
      {/* Wheels */}
      <mesh castShadow position={[-1.5, -0.6, 1]}>
        <cylinderGeometry args={[0.5, 0.5, 0.2, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh castShadow position={[1.5, -0.6, 1]}>
        <cylinderGeometry args={[0.5, 0.5, 0.2, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh castShadow position={[-1.5, -0.6, -1]}>
        <cylinderGeometry args={[0.5, 0.5, 0.2, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh castShadow position={[1.5, -0.6, -1]}>
        <cylinderGeometry args={[0.5, 0.5, 0.2, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="black" />
      </mesh>
      
      {/* Front wing */}
      <mesh castShadow position={[-2, -0.3, 0]}>
        <boxGeometry args={[0.5, 0.2, 2.5]} />
        <meshStandardMaterial color="red" />
      </mesh>
      
      {/* Rear wing */}
      <mesh castShadow position={[2, 0.2, 0]}>
        <boxGeometry args={[0.2, 0.8, 2]} />
        <meshStandardMaterial color="red" />
      </mesh>
      
      {/* Driver cockpit */}
      <mesh castShadow position={[0, 0.2, 0]}>
        <capsuleGeometry args={[0.5, 1.5, 2, 8]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  );
}

// Track component
function Track() {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[100, 20]} />
      <meshStandardMaterial color="#333" />
    </mesh>
  );
}

// Main Scene component
export default function F1Scene() {
  const { qualityLevel, reducedMotion } = useStore();
  const hasWebGL = useDetectWebGL();
  
  if (!hasWebGL) {
    return <FallbackMessage />;
  }
  
  return (
    <Canvas shadows={qualityLevel !== 'low'}>
      <PerspectiveCamera makeDefault position={[0, 2, 10]} fov={60} />
      
      {!reducedMotion && <Effects qualityLevel={qualityLevel} />}
      
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[5, 10, 5]} 
        intensity={1.5} 
        castShadow={qualityLevel !== 'low'}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      
      <Suspense fallback={<LoadingModel />}>
        <F1Car />
        <Track />
        <Environment preset="city" />
      </Suspense>
      
      {qualityLevel === 'high' && <OrbitControls enableZoom={false} enablePan={false} />}
    </Canvas>
  );
}

// Utility to detect WebGL support
function useDetectWebGL() {
  const [hasWebGL, setHasWebGL] = useState(true);
  
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setHasWebGL(!!gl);
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);
  
  return hasWebGL;
}