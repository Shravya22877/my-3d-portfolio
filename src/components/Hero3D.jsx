
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  ContactShadows,
  Float,
  MeshReflectorMaterial
} from "@react-three/drei";
import * as THREE from "three";

function Humanoid() {
  const group = useRef();
  const head = useRef();

  useFrame((state, delta) => {
    if (!group.current) return;

    const targetX =
      (state.pointer.x * 0.12);

    const targetY =
      (state.pointer.y * 0.07);

    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      targetX,
      2,
      delta
    );

    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      -targetY,
      2,
      delta
    );

    if (head.current) {
      head.current.rotation.y = THREE.MathUtils.damp(
        head.current.rotation.y,
        targetX * 0.5,
        3,
        delta
      );
    }
  });

  const blackMaterial = new THREE.MeshPhysicalMaterial({
    color: "#101114",
    metalness: 0.72,
    roughness: 0.22,
    clearcoat: 1,
    clearcoatRoughness: 0.12
  });

  const darkMaterial = new THREE.MeshPhysicalMaterial({
    color: "#050608",
    metalness: 0.85,
    roughness: 0.18,
    clearcoat: 1
  });

  return (
    <group ref={group} position={[0, -0.4, 0]}>

      {/* SHOULDERS */}

      <mesh
        position={[0, 0.25, 0]}
        scale={[1.42, 0.63, 0.48]}
        material={blackMaterial}
      >
        <sphereGeometry args={[1, 64, 64]} />
      </mesh>

      {/* NECK */}

      <mesh
        position={[0, 0.92, 0]}
        scale={[0.38, 0.7, 0.34]}
        material={darkMaterial}
      >
        <cylinderGeometry args={[0.65, 0.8, 1, 48, 32]} />
      </mesh>

      {/* UPPER TORSO */}

      <mesh
        position={[0, -0.42, 0]}
        scale={[0.95, 0.9, 0.43]}
        material={blackMaterial}
      >
        <sphereGeometry args={[1, 64, 64]} />
      </mesh>

      {/* LEFT SHOULDER JOINT */}

      <mesh
        position={[-1.12, 0.1, 0]}
        scale={[0.35, 0.43, 0.42]}
        material={darkMaterial}
      >
        <sphereGeometry args={[1, 48, 48]} />
      </mesh>

      {/* RIGHT SHOULDER JOINT */}

      <mesh
        position={[1.12, 0.1, 0]}
        scale={[0.35, 0.43, 0.42]}
        material={darkMaterial}
      >
        <sphereGeometry args={[1, 48, 48]} />
      </mesh>

      {/* HEAD */}

      <group ref={head} position={[0, 2.05, 0]}>

        {/* FACeless helmet */}

        <mesh
          position={[0, 0.1, 0]}
          scale={[0.65, 1.03, 0.57]}
          material={darkMaterial}
        >
          <sphereGeometry args={[1, 96, 96]} />
        </mesh>

        {/* FRONT FACE SHIELD */}

        <mesh
          position={[0, 0.12, 0.455]}
          scale={[0.48, 0.75, 0.13]}
        >
          <sphereGeometry args={[1, 64, 64]} />
          <meshPhysicalMaterial
            color="#020203"
            metalness={0.95}
            roughness={0.08}
            clearcoat={1}
          />
        </mesh>

        {/* LEFT HEADPHONE */}

        <mesh
          position={[-0.68, 0.05, 0]}
          rotation={[0, 0, 0.04]}
          material={blackMaterial}
        >
          <cylinderGeometry args={[0.24, 0.24, 0.13, 48]} />
        </mesh>

        {/* RIGHT HEADPHONE */}

        <mesh
          position={[0.68, 0.05, 0]}
          material={blackMaterial}
        >
          <cylinderGeometry args={[0.24, 0.24, 0.13, 48]} />
        </mesh>

        {/* HEADPHONE DETAILS */}

        <mesh
          position={[-0.75, 0.05, 0]}
          scale={[0.16, 0.3, 0.23]}
          material={darkMaterial}
        >
          <sphereGeometry args={[1, 48, 48]} />
        </mesh>

        <mesh
          position={[0.75, 0.05, 0]}
          scale={[0.16, 0.3, 0.23]}
          material={darkMaterial}
        >
          <sphereGeometry args={[1, 48, 48]} />
        </mesh>

      </group>

      {/* SHOULDER LIGHT REFLECTIONS */}

      <mesh
        position={[0, 0.43, 0.43]}
        scale={[0.95, 0.055, 0.045]}
        rotation={[0, 0, 0]}
      >
        <sphereGeometry args={[1, 48, 48]} />
        <meshBasicMaterial
          color="#34373d"
          transparent
          opacity={0.45}
        />
      </mesh>

    </group>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#050505"]} />

      <ambientLight intensity={0.7} />

      <spotLight
        position={[4, 7, 5]}
        intensity={100}
        angle={0.55}
        penumbra={1}
        color="#ffffff"
      />

      <spotLight
        position={[-5, 4, 2]}
        intensity={85}
        angle={0.7}
        penumbra={1}
        color="#aeb7d0"
      />

      <pointLight
        position={[0, 2, -3]}
        intensity={30}
        color="#ffffff"
      />

      <Environment preset="studio" />

      <Float
        speed={1.1}
        rotationIntensity={0.08}
        floatIntensity={0.12}
      >
        <Humanoid />
      </Float>

      <ContactShadows
        position={[0, -1.4, 0]}
        opacity={0.6}
        scale={5}
        blur={2.5}
        far={3}
      />
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="hero-3d">
      <Canvas
        camera={{
          position: [0, 1.1, 7],
          fov: 38
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance"
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
