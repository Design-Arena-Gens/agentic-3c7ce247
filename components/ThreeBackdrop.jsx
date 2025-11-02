"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function PulseParticles() {
  const ref = useRef();
  const positions = useMemo(() => {
    const pts = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      const r = Math.random() * 3 + 1;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pts[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pts[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pts[i * 3 + 2] = r * Math.cos(phi);
    }
    return pts;
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.04;
    ref.current.rotation.x += delta * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#8c8cff"
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function EnergyTubes() {
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#ffffff"),
        transparent: true,
        opacity: 0.12,
        metalness: 0.6,
        roughness: 0.25,
        side: THREE.DoubleSide
      }),
    []
  );

  return (
    <group>
      {[1.6, 2.3, 3.2].map((radius, index) => (
        <Float
          key={radius}
          speed={1.5 + index * 0.2}
          rotationIntensity={0.25}
          floatIntensity={0.4}
        >
          <mesh>
            <torusGeometry args={[radius, 0.055, 32, 300]} />
            <primitive object={material.clone()} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function GradientLight() {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.position.x = Math.sin(clock.elapsedTime * 0.35) * 2;
    ref.current.position.y = Math.cos(clock.elapsedTime * 0.45) * 1.5;
  });
  return (
    <pointLight
      ref={ref}
      intensity={2.6}
      color="#8c8cff"
      distance={14}
      decay={2}
      position={[2.5, 1.2, 2.5]}
    />
  );
}

export default function ThreeBackdrop() {
  return (
    <Canvas className="absolute inset-0" dpr={[1, 2]} gl={{ alpha: true }}>
      <color attach="background" args={["#050505"]} />
      <fog attach="fog" args={["#050505", 6, 16]} />
      <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={60} />
      <ambientLight intensity={0.6} />
      <GradientLight />
      <directionalLight
        position={[-3, 6, 4]}
        intensity={0.25}
        color="#ffffff"
      />
      <group rotation={[0.15, -0.1, 0]}>
        <EnergyTubes />
        <PulseParticles />
      </group>
    </Canvas>
  );
}
