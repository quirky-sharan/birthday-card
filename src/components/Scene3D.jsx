import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function HeartShape() {
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    const x = 0,
      y = 0;
    shape.moveTo(x + 0.5, y + 0.5);
    shape.bezierCurveTo(x + 0.5, y + 0.5, x + 0.4, y, x, y);
    shape.bezierCurveTo(x - 0.5, y, x - 0.5, y + 0.5, x - 0.5, y + 0.5);
    shape.bezierCurveTo(x - 0.5, y + 0.75, x - 0.25, y + 0.95, x, y + 0.5);
    shape.bezierCurveTo(x + 0.25, y + 0.95, x + 0.5, y + 0.75, x + 0.5, y + 0.5);
    return new THREE.ExtrudeGeometry(shape, {
      depth: 0.15,
      bevelEnabled: true,
      bevelThickness: 0.04,
      bevelSize: 0.04,
      bevelSegments: 3,
    });
  }, []);

  return (
    <mesh geometry={geometry} scale={0.8}>
      <meshStandardMaterial
        color="#e08b7a"
        emissive="#c45c4a"
        emissiveIntensity={0.15}
        roughness={0.6}
        metalness={0.1}
      />
    </mesh>
  );
}

function FloatingHeart({ position, scale = 1, speed = 1 }) {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y += Math.sin(state.clock.elapsedTime * speed) * 0.002;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5 * speed) * 0.1;
    }
  });
  return (
    <Float speed={1.2 * speed} rotationIntensity={0.2} floatIntensity={0.4}>
      <group ref={ref} position={position} scale={scale}>
        <HeartShape />
      </group>
    </Float>
  );
}

function FloatingSphere({ position, color, size = 0.4 }) {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.0015;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <mesh ref={ref} position={position}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.1}
          roughness={0.7}
          metalness={0.1}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
}

function FloatingRing({ position, scale = 1 }) {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.15;
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <Float speed={1} floatIntensity={0.2}>
      <mesh ref={ref} position={position} scale={scale}>
        <torusGeometry args={[0.35, 0.08, 12, 24]} />
        <meshStandardMaterial
          color="#d4a574"
          emissive="#c45c4a"
          emissiveIntensity={0.08}
          roughness={0.6}
          metalness={0.2}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <pointLight position={[-10, -10, 5]} intensity={0.3} color="#e08b7a" />
      <pointLight position={[5, 5, -5]} intensity={0.2} color="#d4a574" />

      <FloatingHeart position={[-2.5, 0.5, -3]} scale={0.5} speed={0.6} />
      <FloatingHeart position={[2.2, -0.3, -4]} scale={0.4} speed={0.8} />
      <FloatingHeart position={[-1, -1.2, -5]} scale={0.35} speed={0.5} />
      <FloatingHeart position={[1.8, 1, -3.5]} scale={0.45} speed={0.7} />
      <FloatingHeart position={[0, 0.8, -6]} scale={0.3} speed={0.9} />
      <FloatingHeart position={[-2, 1.5, -4.5]} scale={0.25} speed={0.55} />
      <FloatingHeart position={[2.5, -0.8, -5.5]} scale={0.3} speed={0.65} />

      <FloatingSphere position={[-1.5, 1.8, -4]} color="#e8c9a8" size={0.25} />
      <FloatingSphere position={[1.2, -1.5, -3]} color="#f5f1ec" size={0.2} />
      <FloatingSphere position={[-2.2, -0.5, -5]} color="#e08b7a" size={0.18} />
      <FloatingSphere position={[0.5, 1.2, -4.5]} color="#d4a574" size={0.22} />

      <FloatingRing position={[-0.5, -0.2, -5]} scale={0.6} />
      <FloatingRing position={[1.5, 0.8, -4]} scale={0.4} />
    </>
  );
}

export default function Scene3D() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 55 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
      >
        <color attach="background" args={["transparent"]} />
        <Scene />
      </Canvas>
    </div>
  );
}
