'use client';

import { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function RandomParticles() {
  const count = 5000;
  const pointsRef = useRef<THREE.Points>(null);
  const velocities = useRef<Float32Array>(new Float32Array(count * 3)); // x, y, z velocity
  const { mouse } = useThree();

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 20;
      velocities.current[i] = (Math.random() - 0.5) * 0.2; // random speed
    }
    return arr;
  }, [count]);

  useFrame(() => {
    const geometry = pointsRef.current?.geometry;
    if (!geometry) return;

    const positionAttr = geometry.getAttribute('position') as THREE.BufferAttribute;
    const positionsArray = positionAttr.array as Float32Array;

    for (let i = 0; i < count * 3; i += 3) {
      positionsArray[i] += velocities.current[i] * 0.5;     // x
      positionsArray[i + 1] += velocities.current[i + 1] * 0.5; // y
      positionsArray[i + 2] += velocities.current[i + 2] * 0.5; // z

      // Wrap particles if they go out of bounds
      for (let j = 0; j < 3; j++) {
        if (positionsArray[i + j] > 10) positionsArray[i + j] = -10;
        if (positionsArray[i + j] < -10) positionsArray[i + j] = 10;
      }
    }

    positionAttr.needsUpdate = true;

    // Mouse parallax (optional)
    if (pointsRef.current) {
      pointsRef.current.rotation.x = mouse.y * 0.3;
      pointsRef.current.rotation.y += mouse.x * 0.3 * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#00ffff" size={0.04} sizeAttenuation />
    </points>
  );
}

