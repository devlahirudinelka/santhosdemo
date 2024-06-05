import logo from './logo.svg';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Plane, PresentationControls, useProgress } from '@react-three/drei';
import { Suspense, useRef, useState } from 'react';
import Lights from './Lights';
import { MailerBoxCom } from './modelsCom/MailerBoxCom';
import { SkilletBoxCom } from './modelsCom/SkilletBoxCom';

function App() {
  const ref = useRef();
  const [show, setshow] = useState(false)
  const { progress } = useProgress()
  const numericProgress = parseInt(progress, 10)
  return (
    <div className='w-screen h-screen '>
      <button onClick={() => setshow(!show)} className='ring-1 px-5 py-2'>Change model</button>
      <div className='w-screen h-full'>

        <Suspense fallback={<><span>{numericProgress} % Loading</span></>}>
          <Canvas
            camera={{
              position: [0, 0, 1],

            }}
            shadows >
            <PresentationControls
              polar={[- 0, 0]}
              azimuth={[0, 0]}
              config={{ mass: 2, tension: 400 }}
              snap={{ mass: 4, tension: 400 }}
            >
              <OrbitControls
                ref={ref}
                autoRotate
                autoRotateSpeed={0.3}
                enableDamping={false}
                dampingFactor={0.25}
                enablePan={true}
                enableZoom={true}
                zoomSpeed={1.2}
                maxPolarAngle={Math.PI / 2}
                // minPolarAngle={Math.PI / 3}
                keyPanSpeed={0.1}
                maxDistance={150}
                minDistance={1}
                cameraPositionSet={[2, 5, 2]}

              />
              {
                show ? (<MailerBoxCom scale={3}  />) : (<SkilletBoxCom scale={3} />)
              }

              <Plane
                receiveShadow
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -8, 0]}
                args={[120, 100]}
            >
                <meshStandardMaterial attach="material" color="#585E59" />
            </Plane>
              <Lights />
            </PresentationControls>

          </Canvas>
        </Suspense>

      </div>


    </div>
  );
}

export default App;
