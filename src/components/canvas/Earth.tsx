// import { OrbitControls, useGLTF } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { Suspense } from "react";
// import CanvasLoader from "../Loader";

// const Earth = () => {
//   const { scene } = useGLTF("./planet/scene.gltf");

//   if (!scene) {
//     console.error("GLTF model could not be loaded.");
//     return null;
//   }
//   return <primitive object={scene} scale={2.5} position-y={0} position-x={0} />;
// };

// const EarthCanvas = () => {
//   return (
//     <Canvas
//       shadows
//       frameloop="demand"
//       gl={{ preserveDrawingBuffer: true }}
//       camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           autoRotate
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Earth />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default EarthCanvas;
 
 const Earth = () => {
   return (
     <div>Earth</div>
   )
 }
 
 export default Earth