import React from 'react';

export default function LoadingModel() {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="red" wireframe />
    </mesh>
  );
}