import { Canvas } from '@react-three/fiber';
import React from 'react';
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei';
import MacContainer from './MacContainer';
const App = () => {
  return (
    <div className='w-full h-screen'>
      <div className="absolute flex flex-col items-center text-white top-36 left-1/2 -translate-x-1/2 font-sans">
        <h3 className='masked text-7xl tracking-tighter font-[650]'>macbook pro.</h3>
        <h5>Oh so pro! </h5>
        <p className='text-center w-4/5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. list-group-iteml list-group-item </p>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }} >
        <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_08_4k.exr']} />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App