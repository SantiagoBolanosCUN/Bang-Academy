import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, OrbitControls, Html, useProgress } from "@react-three/drei";
import * as THREE from "three";
import { Physics } from "@react-three/cannon";
import Planet from "../components/Planet";

import { LayerMaterial, Depth } from "lamina";

function Bg() {
  const mesh = useRef();
  useFrame((state, delta) => {
    mesh.current.rotation.x =
      mesh.current.rotation.y =
      mesh.current.rotation.z +=
        delta;
  });
  return (
    <mesh ref={mesh} scale={100}>
      <sphereGeometry args={[1, 64, 64]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth
          colorA="#AD05A8"
          colorB="#053BA6"
          alpha={1}
          mode="normal"
          near={0}
          far={250}
          origin={[100, 100, 100]}
        />
      </LayerMaterial>
    </mesh>
  );
}
function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

export default function Home() {
  const props = { base: "#E807E1", colorA: "#E807E1", colorB: "#E807E1" };
  return (
    <div className="h-screen w-screen cursor-pointer">
      {/*<Navbar />*/}
      <Canvas
        width="100%"
        style={{ maxWidth: "100% !important" }}
        camera={{
          fov: 35,
          zoom: 1.2,
          near: 1,
          far: 10000,
          angle: 1,
          position: [0, 100, 20],
        }}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls />
          <Bg {...props} />
          <Stars
            depth={15}
            radius={40}
            count={10000}
            factor={5}
            saturation={0}
            fade
            speed={1}
          />
          <ambientLight intensity={0.5} />
          <spotLight position={[15, 30, 20]} angle={0.8} />
          <Physics>
            <Planet
              name="NebulosaInnova"
              position={[17.118, 5.562, 2]}
              texturePath="/nebulosaInnova.jpg"
              positionTexto={[10.5, 15, 10]}
            />
            <Planet
              cursor-pointer
              name="Supernova"
              position={[10.58, -14.56, -12]}
              texturePath="/supernova.jpg"
              positionTexto={[6.8, -10.56, -4]}
            />
            <Planet
              name="Ideaverso"
              position={[-10.58, -14.56, -12]}
              texturePath="/Ideaverso.jpg"
              positionTexto={[-13.58, -14.56, -4]}
            />
            <Planet
              name="LibreriaOrion"
              position={[-17.18, 5.56, 1]}
              texturePath="/libreriaOrion.jpg"
              positionTexto={[-20.118, 5.562, 9]}
            />
            <Planet
              name="MeteoroGame"
              position={[0, 18, 12]}
              texturePath="/meteoroGame.jpg"
              positionTexto={[-3, 18, 20]}
            />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
}
