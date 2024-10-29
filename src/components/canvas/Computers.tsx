// import { Engine, Scene, SceneEventArgs } from 'react-babylonjs';
// import { SceneLoader, Animation, Vector3 } from '@babylonjs/core';
// import '@babylonjs/loaders';

// function ComputersCanvas() {
//   const onSceneMount = (e: SceneEventArgs) => {
//     const { scene } = e;

//     SceneLoader.Append(
//       "/",           
//       "gaming_desktop_pc.glb",           
//       scene,                  
//       () => {
//         console.log("Model loaded successfully!");
//         // تنفيذ الرسوم المتحركة
//         animateModel(scene);
//       },
//       null,
//       (scene, message, exception) => {
//         console.error("Error loading model ANAS", message, exception);
//       }
//     );
//   };
//   const animateModel = (scene:(typeof Scene)) => {
//     const model = scene.getMeshByName("اسم_النموذج"); // استخدم الاسم الصحيح للنموذج
//     if (model) {
//       const animation = new Animation("moveAnimation", "position.x", 30, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CYCLE);
//       const keys = [
//         { frame: 0, value: model.position.x },
//         { frame: 60, value: model.position.x + 5 },  // نهاية الحركة
//       ];
//       animation.setKeys(keys);
//       model.animations.push(animation);
//       scene.beginAnimation(model, 0, 60, true); // ابدأ الرسوم المتحركة
//     }
//   };

//   return (
//     <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
//       <Scene onSceneMount={onSceneMount}>
//         <arcRotateCamera
//           name="camera1"
//           target={new Vector3(0, 1, 0)}
//           alpha={Math.PI / 2}
//           beta={Math.PI / 4}
//           radius={10}
//           minZ={0.1}
//           wheelPrecision={50}
//         />
//         <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
//         <directionalLight
//           name="light2"
//           direction={new Vector3(-1, -2, -1)}
//           position={new Vector3(5, 10, -5)}
//           intensity={0.5}
//         />
//       </Scene>
//     </Engine>
//   );
// }

// export default ComputersCanvas;

const Computers = () => {
  return (
    <div>Computers</div>
  )
}

export default Computers