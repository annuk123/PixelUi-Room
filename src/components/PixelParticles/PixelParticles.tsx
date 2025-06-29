'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useMemo, useRef } from 'react';
import * as THREE from 'three';

const PARTICLE_COUNT = 200;

function ParticleField() {
  const meshRef = useRef<THREE.InstancedMesh>(null!);

  const { positions, speeds } = useMemo(() => {
    const positions = Array.from({ length: PARTICLE_COUNT }, () => [
      (Math.random() - 0.5) * 100,
      (Math.random() - 0.5) * 100,
      Math.random() * 100,
    ]);
    const speeds = Array.from({ length: PARTICLE_COUNT }, () => Math.random() * 0.5 + 0.2);
    return { positions, speeds };
  }, []);

  useFrame(() => {
    const mesh = meshRef.current;
    const temp = new THREE.Object3D();

    positions.forEach((pos, i) => {
      pos[2] -= speeds[i];
      if (pos[2] < 0) {
        pos[0] = (Math.random() - 0.5) * 100;
        pos[1] = (Math.random() - 0.5) * 100;
        pos[2] = 100;
      }

      temp.position.set(pos[0], pos[1], pos[2]);
      temp.scale.setScalar(0.5);
      temp.updateMatrix();
      mesh.setMatrixAt(i, temp.matrix);
    });

    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLE_COUNT]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="hsl(200, 100%, 70%)" />
    </instancedMesh>
  );
}

export default function PixelParticles() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>
      </Canvas>
    </div>
  );
}
