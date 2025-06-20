'use client';

import { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function Particles() {
  const count = 5000;
  const pointsRef = useRef<THREE.Points>(null);
  const timeRef = useRef(0);

  // Mouse for parallax
  const { mouse } = useThree();

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      // Continuous rotation
      pointsRef.current.rotation.y += delta * 0.1;

      // Pulsing glow effect
      timeRef.current += delta * 2;
      const pulse = (Math.sin(timeRef.current) + 1.5) * 0.5;
      (pointsRef.current.material as THREE.PointsMaterial).color.setHSL(0.5, 1, pulse * 0.3 + 0.4);

      // Mouse Parallax
      pointsRef.current.rotation.x = mouse.y * 0.3;
      pointsRef.current.rotation.y += mouse.x * 0.3 * delta;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#000000" size={0.05} />
    </points>
  );
}
