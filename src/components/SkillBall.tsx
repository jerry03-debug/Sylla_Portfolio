'use client';

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  Html
} from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";
import * as THREE from 'three';

const Ball = ({ icon, color }: { icon: React.ReactNode; color: string }) => {
  const groupRef = useRef<THREE.Group>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const y = Math.sin(clock.getElapsedTime() * 0.5) * 0.3;
      groupRef.current.position.y = y;
    }
    if (iconRef.current) {
      iconRef.current.style.transform = ` translateY(${-groupRef.current?.position.y}px)`;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh
        castShadow 
        receiveShadow 
        scale={2.75}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={color}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Html
          center
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '150px',
            height: '150px',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
          transform
          distanceFactor={2.5}
          position={[0, 0, 1]}
        >
          <div className="w-full h-full flex items-center justify-center text-white">
            <div className="w-24 h-24">
              {icon}
            </div>
          </div>
        </Html>
      </mesh>
    </group>
  );
};

interface SkillBallProps {
  icon: React.ReactNode;
  name: string;
  color: string;
}

export const SkillBall = ({ icon, name, color }: SkillBallProps) => {
  return (
    <div className="w-28 h-28">
      <Canvas
        frameloop="always"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.5}
            autoRotate
            autoRotateSpeed={0.5}
          />
          <Ball icon={icon} color={color} />
        </Suspense>
        <Preload all />
      </Canvas>
      <p className="text-center mt-2 text-sm font-medium">{name}</p>
    </div>
  );
};
